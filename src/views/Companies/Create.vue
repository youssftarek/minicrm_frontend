<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Company</h4>
            </div>
            <div class="card-body">
                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error,index) in this.errorList" :key="index">
                        {{ error[0] }}
                    </li>

                </ul>
                <div class="mb-3">
                    <label for="">Company Name</label>
                    <input type="text" v-model="model.company.name" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="">Company Email</label>
                    <input type="text" v-model="model.company.email" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="">Company Revenue</label>
                    <input type="number" v-model="model.company.revenue" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="">Company Website</label>
                    <input type="text" v-model="model.company.website" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="">Company Logo</label>
                    <input type="file" class="form-control" @change="handleFileChange"/>
                </div>
                <div class="mb-3">
                <button type="button" @click="saveCompany" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>     
</template>
<script>
import axios from 'axios';

export default {
    name: "CompanyCreate",
    data() {
        return {
            errorList: '',
            model: {
                company:{
                    name: '',
                    email: '',
                    revenue: '',
                    website: '',
                    logo: ''
                    
                }    
            }   
        }
    },
    methods: {
        handleFileChange(event) {
        this.company.logo = event.target.files[0];
        },
        saveCompany() {
            var $this = this;
            axios.post('http://localhost:8000/api/companies', this.model.company)
                .then(res => {
                    console.log(res.data);
                    alert("Company created successfully",200);
                    // this.$router.push('/companies');
                    this.model.company = {
                    name: '',
                    email: '',
                    revenue: '',
                    website: '',
                    logo: ''
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        if(error.response.status == 422){
                            alert("Validation error",422);
                            $this.errorList = error.response.data;
                        }

                        // console.log(error.response.data);
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                    } else if (error.request) {
  
                        console.log(error.request);
                    } else {

                        console.log('Error', error.message);
                    }
                    // console.log(error.config);
  });
        }
    },
}

</script>
