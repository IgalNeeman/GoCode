class TestClass
{

    class Person
    {
        string name
        int id;

         public void SetId(int id)
        {
                this.id = id;
        }
        public int GetId()
        {
            return id;
        }

     
         public void SetName(int name)
        {
                this.name = name;
        }

        public int GetName()
        {
            return name;
        }

        publicPerson(string n, int a)
        {
            this.name = n;
            this.age = a;
        }
    }

        


    static void Main(string[] args)
    {
        
        Console.WriteLine(args.Length);

        Person p1 = new Person(24, "24");
        Person p2 = new Person();


    }
}