-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    SELECT Product.ProductName, Category.CategoryName FROM Product
    JOIN Category ON Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
    SELECT OrderDetail.ProductId, Product.ProductName, OrderDetail.Quantity FROM "OrderDetail"
    JOIN Product ON OrderDetail.ProductId = Product.Id
    WHERE OrderId = 10251
    ORDER BY ProductName ASC;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
    SELECT "Order.OrderId", Customer.Id, Employee.LastName FROM "Order"
    JOIN Customer ON "Order".CustomerId = Customer.Id
    JOIN Employee ON "Order".EmployeeId = Employee.Id;