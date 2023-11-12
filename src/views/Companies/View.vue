
<template>
<div class="container">
    <div class="card">
        <div class="card-header">
            <h4>Top Companies
                <RouterLink to="/companies/create" class = "btn btn-primary float-end">
                    Add Company
                </RouterLink>
            </h4>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Company Id</th>
                        <th>Company Name</th>
                        <th>Company Email</th>
                        <th>Company Revenue</th>
                        <th>Company Website</th>
                        <th>Company Logo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody v-if="this.companies.length > 0">
                    <tr v-for="(company, index) in this.companies" :key="index">
                        <td>{{ company.id }}</td>
                        <td>{{ company.name }}</td>
                        <td>{{ company.email }}</td>
                        <td>{{ company.revenue }}</td>
                        <td>{{ company.website }}</td>
                        <td>{{ company.logo }}</td>
                        <td>
                            <RouterLink to="/" class="btn btn-primary">Edit</RouterLink>
                            <button class="btn btn-danger">Delete</button>                           
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <td colspan="7">Loading...</td>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
    name: "Companies",
    data() {
        return {
            companies: []
        }
    },
    methods: {
        getCompanies() {
            axios.get('http://localhost:8000/api/companies')
                .then(res => {
                    this.companies = res.data.data;
                    console.log(this.companies);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    mounted() {
        this.getCompanies();
    }
}
</script>