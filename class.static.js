// static

// khong duoc goi tu instance tu class do ma duoc goi truc tiep tu class
// instance la 1 class duoc tao ra tu 1 class nao do 


class Foo {
    static someMethod() {
        console.log('some method');
    }

    anotherMethod() {
        console.log('another method');
    }
}

Foo.someMethod();

const foo = new Foo(); // this is instance of class Foo
foo.anotherMethod();
// foo.someMethod()  can not call. so it's static method