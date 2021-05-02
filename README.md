# typescript-mocha-testing
Adacta Job Entrance Exam

Q&A

---

- Basic proficiency in languages we use (c#, js, ts, sql)\

    Q: When would you use an abstract class in c#?\
    A: A class can only extend one abstract class so I would use an abstract class when I need to implement multiple interfaces or just implement/override existing functionality. \\
                
    Q: Why would you declare a method private in c#?\
    A: In order to hide its variables and functions from other functions and objects. So it would only be accessible from the same class (not even from an instance of the same class).\\
    
    Q: What does "this" refer to in js?\
    A: "this" refers to the object it belongs to (its value is different deppending on where you use it).\\

    Q: What is the difference between declaring a variable with var and let in js?\
    A: The difference is that "var" is function scoped and "let" is block scoped, so a variable declared with "var" is defined troughout the program.\\

    Q: What is the difference between an inner and an outer join in SQL?\
    A: Both are used to combine contents of different tables but, an inner join provides the intersection of two tables and an outer join provides the union of two tables.\\

    Q: How does an index impact table operations?\
    A: In general, indexing makes columns faster to query by creating pointers to where data is stored within the database. The drawback is that, the more indexes a table has, the slower INSER, UPDATE and DELETE operations will be. \\

- Open ended question

    Q: How would you approach to code reviews if you’re responsible for a quality of code?\
    A: - I would like to review fever lines of code at a time in order to not be overwhelmed and so I can effectively find defects,\
       - I would like to see some annotations in the code to guide the reviewer (Can become overwhelming if overused.),\
       - Have a positive code review culture (embracing possible implications of others and the fact that you do write better code if you know other are going to take a look at it)
