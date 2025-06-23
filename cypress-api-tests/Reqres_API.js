describe("API Testing Homework", () =>  {

    it("TC_01 Kullanici Listesi", () =>{

       const req={
            method:'GET',
            url:"https://reqres.in/api/users?page=2",
            headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
       },            
            failOnStatusCode: false 
        }

        cy.request(req).then((response) => { 
        
        assert.equal(200,response.status); 
        assert.equal("https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",response.body.support["url"]);
        assert.equal("application/json; charset=utf-8",response.headers["content-type"]);
        assert.isTrue(response.duration <=2000); 

        });
    });

    it("TC_02 1.Kullanici Listesi", () =>{

        const req={
            method:'GET',
            url:"https://reqres.in/api/users?page=2",
            body:{
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg"
            },
            headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
       },            
            failOnStatusCode: false 
        }

        cy.request(req).then((response) => { 

        assert.equal(200,response.status); 
        assert.equal("7",response.body.data[0].id);
        assert.equal("michael.lawson@reqres.in",response.body.data[0].email);
        assert.equal("Michael",response.body.data[0].first_name);
        assert.equal("Lawson",response.body.data[0].last_name);
        assert.equal("keep-alive",response.headers["connection"]);
        expect(response.duration).to.be.at.most(500);
 
        });
    });

    it("TC_03 2.Kullanici Listesi", () =>{

        const req={
            method:'GET',
            url:"https://reqres.in/api/users?page=2",
            body:{
            id: 8,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            avatar: "https://reqres.in/img/faces/8-image.jpg"
        },
            headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
       },
            failOnStatusCode: false 
        }

        cy.request(req).then((response) => { 

        assert.equal(200,response.status);
        expect(response.body.data[1]).to.deep.eq({

            id: 8,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            avatar: "https://reqres.in/img/faces/8-image.jpg"

            });

        cy.log("response body" , JSON.stringify(response.body.data[1]));
        assert.equal("chunked",response.headers["transfer-encoding"]);
        expect(response.duration).to.be.at.most(500);
 
        });
    });
it("TC_04 Post İsteği_Login", () =>{

       const req={
       method: "POST",
       url: "https://reqres.in/api/login",
       body: {
       email: "eve.holt@reqres.in",
       password: "cityslicka"
       },
       headers: {
       "Content-Type": "application/json",
       "x-api-key": "reqres-free-v1"
       },
       failOnStatusCode: false 
       }
       
        cy.request(req).then((response) => { 

        assert.equal(200,response.status);
        assert.equal("application/json; charset=utf-8",response.headers["content-type"]);
        expect(response.duration).to.be.lessThan(400); 

         });
        });

it("TC_05 Post İsteği_Add User", () =>{

       const req={
       method: "POST",
       url: "https://reqres.in/api/users",
       body: {
       name: "morpheus",
       job: "leader"
},
       headers: {
       "Content-Type": "application/json",
       "x-api-key": "reqres-free-v1"
       },
       failOnStatusCode: false 
       }
       
        cy.request(req).then((response) => { 

        assert.equal(201,response.status);
        assert.equal("application/json; charset=utf-8",response.headers["content-type"]);
        expect(response.duration).to.be.lessThan(350); 
        expect(response.body.name).to.eq("morpheus");
        expect(response.body.job).to.eq("leader");

         });
        });   

it("TC_06 Put İsteği Change_Job", () =>{

       const req={
       method: "PUT",
       url: "https://reqres.in/api/users/2",
       body: {
       name: "morpheus",
       job: "president"
},
       headers: {
       "Content-Type": "application/json",
       "x-api-key": "reqres-free-v1"
       },
       failOnStatusCode: false 
       }
       
        cy.request(req).then((response) => { 

        assert.equal(200,response.status);
        assert.equal("application/json; charset=utf-8",response.headers["content-type"]);
        expect(response.duration).to.be.lessThan(350); 
        expect(response.body.name).to.eq("morpheus");
        expect(response.body.job).to.eq("president");

         });
        });  

it("TC_07 Patch İsteği Change_Name", () =>{

       const req={
       method: "PATCH",
       url: "https://reqres.in/api/users/2",
       body: {
       name: "jack",
},
       headers: {
       "Content-Type": "application/json",
       "x-api-key": "reqres-free-v1"
       },
       failOnStatusCode: false 
       }
       
        cy.request(req).then((response) => { 

        assert.equal(200,response.status);
        assert.equal("application/json; charset=utf-8",response.headers["content-type"]);
        expect(response.duration).to.be.lessThan(350); 
        expect(response.body.name).to.eq("jack");

         });
        });  

it("TC_08 Delete İsteği Delete_User", () =>{

       const req={
       method: "DELETE",
       url: "https://reqres.in/api/users/2",
       body: {
       name: "jack",
       job: "president"
},
       headers: {
       "Content-Type": "application/json",
       "x-api-key": "reqres-free-v1"
       },
       failOnStatusCode: false 
       }
       
        cy.request(req).then((response) => { 

        assert.equal(204,response.status);
        expect(response.duration).to.be.lessThan(450); 
       //expect(response.body.name).to.eq("jack");
       //expect(response.body.job).to.eq("president");

         });
        });  

    it("TC_09 Kullanici Bulunamadi", () =>{

       const req={
            method:'GET',
            url:"https://reqres.in/api/users/25",
            headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
       },            
            failOnStatusCode: false 
        }

        cy.request(req).then((response) => { 
        
        assert.equal(404,response.status); 
        assert.equal("application/json; charset=utf-8",response.headers["content-type"]);
        assert.isTrue(response.duration <=2000); 

        });
    });

    it("TC_10 Gecikmeli Yanit", () =>{

       const req={
            method:'GET',
            url:"https://reqres.in/api/users?delay=3",
            headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
       },            
            failOnStatusCode: false 
        }

        cy.request(req).then((response) => { 
        
        assert.equal(200,response.status); 
        assert.equal("application/json; charset=utf-8",response.headers["content-type"]);
        assert.isTrue(response.duration <=20000); 

        });
    });


});


