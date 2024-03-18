<template>
    <div>
        <div class="container mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <router-link :to="{ name: 'List' }"
                            >All Data</router-link
                        >
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updateData">
                            <div class="mb-3">
                                <label for="name" class="form-label"
                                    >Name</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    aria-describedby="emailHelp"
                                    v-model="form.name"
                                />
                                <span class="text-danger" v-if="errors.name">{{
                                    errors.name[0]
                                }}</span>
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                    >Email address</label
                                >
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    v-model="form.email"
                                />
                                <span class="text-danger" v-if="errors.email">{{
                                    errors.email[0]
                                }}</span>
                            </div>

                            <div class="mb-3">
                                <label for="phone" class="form-label"
                                    >Phone</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="phone"
                                    aria-describedby="emailHelp"
                                    v-model="form.phone"
                                />
                            </div>
                            <span class="text-danger" v-if="errors.phone">{{
                                errors.phone[0]
                            }}</span>
                            <div class="mb-3">
                                <label for="phone" class="form-label"
                                    >Gender</label
                                >
                                <select
                                    class="form-control"
                                    v-model="form.gender"
                                >
                                    <option value="" selected>
                                        Select One
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <span class="text-danger" v-if="errors.gender">{{
                                    errors.gender[0]
                                }}</span>
                            </div>

                            <button type="submit" class="btn btn-primary">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                gender: '',
            },
            errors: {},
        }
    },

    mounted() {
        this.editData();
    },

    methods: {
        editData() {
            axios
                .get("/api/students/" + this.$route.params.id)
                .then((res) => {
                    if (res.status == 200) {
                        this.form = res.data.data;
                    }
                })
                .catch((err) => {});
        },

        updateData() {
            axios
                .put("/api/students/" + this.$route.params.id, this.form)
                .then((res) => {
                    if(res.status === 200){
                    this.form = ''
                    this.errors = ''

                    this.$router.push({name: 'List'})
                }
                })
                .catch((err) => {
                    this.errors = err.response.data.errors;
                });
        },

       
    }
};
</script>
<style lang=""></style>
