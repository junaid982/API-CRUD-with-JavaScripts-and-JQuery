

// Show all Data in a Table or Dashboard  


// http GET request to fectch all data from api 
var tbody = document.getElementById('tbody');
var row = '';
$('#post-div').hide()


axios.get('http://127.0.0.1:8000/api/emp/')
.then( (resp) =>{
    var arr = resp.data;
    console.log(arr)
    for (var i = 0 ; i < arr.length ; i++){

        row += `
                <tr>
                    <td>${arr[i].name}</td>
                    <td>${arr[i].email}</td>
                    <td>${arr[i].contact}</td>
                    <td>${arr[i].address}</td>
                    <td>${arr[i].position}</td>
                    <td>${arr[i].company}</td>
                    <td>
                        <a href="#" class="btn btn-success" onclick="UpdateBtn('${arr[i].url}')" >Update</a>
                        
                        <a href="#" class="btn btn-danger" onclick="DeleteBtn('${arr[i].url}')">Delete</a>

                    </td>

                </tr>
        `
    }
    tbody.innerHTML = row;


}).catch( () => {
    alert('Something Went Wrong.')
})



// Post Data Section 

var heading = document.getElementById('heading');

$('#post-btn').click(function(){
    $('#table-div').hide();
    $('#post-btn').hide();
    $('#post-div').show()

    heading.innerHTML = 'Add Employee'

})

function PostBtn(){
    // get all fields data 

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var position = document.getElementById('position').value;
    var company = document.getElementById('company').value;

    // convert field data info form data 

    var fd = new FormData();

    fd.append('name' , name);
    fd.append('email' , email);
    fd.append('contact' , contact);
    fd.append('address' , address);
    fd.append('position' , position);
    fd.append('company' , company);
    fd.append('csrfmiddlewaretoken' , '{{csrf_token}}')

    // post data to api 

    axios.post('http://127.0.0.1:8000/api/emp/' , fd)
    .then( () => {
        alert('Employee Successfully Add')
        window.location = 'index.html'

    }).catch((err) => {
        alert(err)
    })


}



// # Delete Section 

function DeleteBtn(url){
    // console.log(url)
    var x = confirm('Are You Sure Do You Wsnt To Delete  ');

    if (x == true){
        axios.delete(url).then( () => {
            alert('Data Delete')
            window.location = 'index.html'

        }).catch((err) =>{
            alert(err)
        })

    }



}


// Update Section 


function UpdateBtn(url){

    var heading = document.getElementById('heading');

    var update_div = document.getElementById('update-div');

    console.log(url)
    $('#table-div').hide();
    $('#post-btn').hide();

    heading.innerHTML = 'Update Employee'


   axios.get(url).then((resp) => {
    var obj = resp.data;


    update_div.innerHTML = `
    
    
    <div class="container p-5 shadow rounded-3" id="" style="width:60% ;">
            
    <!-- name input  -->
    <div class="mb-3">
        <input type="text" name="uname" id="uname" placeholder="Enter Employee Name" class="form-control" value="${obj.name}">
    </div>

    <!-- Email input  -->
    <div class="mb-3">
        <input type="email" name="uemail" id="uemail" placeholder="Enter Employee Email" class="form-control" value="${obj.email}">
    </div>

    <!-- Contact input  -->
    <div class="mb-3">
        <input type="text" name="ucontact" id="ucontact" placeholder="Enter Employee contact"
            class="form-control" value="${obj.contact}">
    </div>


    <!-- address input  -->
    <div class="mb-3">
        <input type="text" name="uaddress" id="uaddress" placeholder="Enter Employee address"
            class="form-control" value="${obj.address}">
    </div>


    <!-- Position dropdwn  -->
    <div class="mb-3">
        <select name="uposition" id="uposition" class="form-control" >
            <option value="${obj.position}">${obj.position}</option>

            <option value="developer">Developer</option>
            <option value="tester">Tester</option>
            <option value="manager">Manager</option>
        </select>
    </div>

    <!-- company input -->
    <div class="mb-3">
        <input type="text" name="ucompany" id="ucompany" placeholder="Enter Company Name"
            class="form-control" value="${obj.company}">
    </div>

    <!-- submit Button  -->
    <div class="mb-3">
        <input type="submit" value="Update Employee" class="btn btn-success" onclick="Update('${obj.url}')">
    </div>


</div>

    `
    

   }).catch((err) =>{
    alert(err)
   })

}


function Update(url){
    // get all fields data 

    var uname = document.getElementById('uname').value;
    var uemail = document.getElementById('uemail').value;
    var ucontact = document.getElementById('ucontact').value;
    var uaddress = document.getElementById('uaddress').value;
    var uposition = document.getElementById('uposition').value;
    var ucompany = document.getElementById('ucompany').value;

    // convert field data info form data 

    var fd = new FormData();

    fd.append('name' , uname);
    fd.append('email' , uemail);
    fd.append('contact' , ucontact);
    fd.append('address' , uaddress);
    fd.append('position' , uposition);
    fd.append('company' , ucompany);
    fd.append('csrfmiddlewaretoken' , '{{csrf_token}}')

    // post data to api 

    axios.put(url , fd)
    .then( () => {
        alert('Employee Successfully Updated')
        window.location = 'index.html'

    }).catch((err) => {
        alert(err)
    })



    
}











