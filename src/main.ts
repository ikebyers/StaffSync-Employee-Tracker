import inquirer from 'inquirer';
import departmentService from './service/departmentService.js';
import roleService from './service/roleService.js';
import employeeService from './service/employeeService.js';

const mainMenu = async () => {
    let toContinue = true;
    
    while (toContinue) {
        try {
            const { action } = await inquirer.prompt({
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add Department',
                    'Add Role',
                    'Add Employee',
                    'Update Employee Role',
                    'Exit',
                ],
            });

            switch (action) {
                case 'View All Departments':
                    await viewAllDepartments();
                    break;

                case 'View All Roles':
                    await viewAllRoles();
                    break;

                case 'View All Employees':
                    await viewAllEmployees();
                    break;

                case 'Add Department':
                    await addDepartment();
                    break;

                case 'Add Role':
                    await addRole();
                    break;

                case 'Add Employee':
                    await addEmployee();
                    break;

                case 'Update Employee Role':
                    await updateEmployeeRole();
                    break;

                case 'Exit':
                    console.log('Application exited.');
                    toContinue = false;
                    break;
            }
        } catch (error) {
            console.error('An error occurred:');
        }
    }
};

const viewAllDepartments = async () => {
    const departments = await departmentService.getDepartments();
    console.table(departments);
};

const viewAllRoles = async () => {
    const roles = await roleService.getAllRoles();
    console.table(roles);
};

const viewAllEmployees = async () => {
    const employees = await employeeService.getAllEmployees();
    console.table(employees);
};

const addDepartment = async () => {
    const { newDepartmentName } = await inquirer.prompt({
        type: 'input',
        name: 'newDepartmentName',
        message: 'Enter new department name:',
    });
    console.log(newDepartmentName);
    await departmentService.addDepartment(newDepartmentName);
    console.log(`Department '${newDepartmentName}' successfully added to database.`);
};

const addRole = async () => {
    const departments = await departmentService.getDepartments();
    const departmentNames = departments.map((department: { name: any; }) => department.name);
    const { roleName, salary, departmentName } = await inquirer.prompt([
        { type: 'input', name: 'roleName', message: 'Enter the role name:' },
        { 
            type: 'number', 
            name: 'salary', 
            message: 'Enter the role salary:', 
            validate: (input) => {
                const salary = Number(input);
                return isNaN(salary) || salary <= 0 ? 'Please enter a number greater than zero.' : true;
            }
        },
        {
            type: 'list',
            name: 'departmentName',
            message: 'Select department for new role',
            choices: [...departmentNames],
        }
    ]);

    const selectedDepartment = departments.find((department: { name: any; }) => department.name === departmentName);

    if (!selectedDepartment) {
        console.error('Department not found, please select an existing department.')
        return;
    }
    
    await roleService.addRole(roleName, salary, selectedDepartment.id);
    console.log(`Role '${roleName}' added to database.`);
};

const addEmployee = async () => {
    const roles = await roleService.getAllRoles();
    const roleNames = roles.map((role: { title: any; }) => role.title);
    const { firstName, lastName, roleName } = await inquirer.prompt([
        { type: 'input', name: 'firstName', message: 'First name of new employee:' },
        { type: 'input', name: 'lastName', message: 'Last name of new employee:' },
        { type: 'list', name: 'roleName', message: 'Role of new employee:', choices: [...roleNames] }
    ]);

    const selectedRole = roles.find((role: { title: any; }) => role.title === roleName);

    if (!selectedRole) {
        console.error('Employee not found, please select an existing employee.');
        return;
    }

    await employeeService.addEmployee(firstName, lastName, selectedRole.id);
    console.log(`Employee added to database: ${firstName} ${lastName}`);
};

const updateEmployeeRole = async () => {
    const employees = await employeeService.getAllEmployees();
    const roles = await roleService.getAllRoles();
    const { employeeId, newRoleId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'employeeId',
            message: 'Select employee:',
            choices: employees.map((employee: { first_name: any; last_name: any; id: any; }) => ({
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id,
            })),
        },
        {
            type: 'list',
            name: 'newRoleId',
            message: 'Select new role:',
            choices: roles.map((role: { title: any; id: any; }) => ({
                name: role.title,
                value: role.id,
            })),
        }
    ]);
    
    await employeeService.updateEmployee(employeeId, newRoleId);
    console.log(`Employee updated successfully.`);
};

// Invoke the main menu
mainMenu();