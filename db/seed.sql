USE company_db;

INSERT INTO departments
VALUES ('Development'), ('Management'), ('Customer Service'), ('Sales'), ('Maintenance');

INSERT INTO roles (title, salary, department_id)
VALUES ('front end developer', 100000, 1), ('back end developer', 100000, 1), ('manager', 200000, 2), ('CS Rep', 70000, 3), ('Sales Rep', 70000, 4), ('Code Monkey', 100000, 5);

INSERT INTO employees (first, last, role_id, manager_id)
VALUES ('Mary', 'Mae', 5, NULL), ('Bob', 'Rob', 3, NULL), ('Amy','Cooper', 4, NULL), ('Hey','You', 1, 2), ('Him', 'Over there', 2, 2), ('Keyboard','Queen', 6, 2);

