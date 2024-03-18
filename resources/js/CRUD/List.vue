<template>
    <div>
        <div class="container mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <router-link :to="{ name: 'Add' }">Add New</router-link>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-light">
                                <thead>
                                    <tr>
                                        <th scope="col">Sl</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(student, index) in students"
                                        :key="index"
                                    >
                                        <td>{{ ++index }}</td>
                                        <td>{{ student.name }}</td>
                                        <td>{{ student.email }}</td>
                                        <td>{{ student.phone }}</td>
                                        <td>{{ student.gender }}</td>
                                        <td>
                                            <router-link
                                                :to="{
                                                    name: 'edit',
                                                    params: {
                                                        id: student.id,
                                                    },
                                                }"
                                                class="btn btn-info btn-sm"
                                                >Edit</router-link
                                            >
                                            &nbsp;
                                            <a
                                                href=""
                                                class="btn btn-danger btn-sm"
                                                @click.prevent="
                                                    destroy(student.id)
                                                "
                                                >Delete</a
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            students: [],
        };
    },

    mounted() {
        this.fetchStudents();
    },

    methods: {
        fetchStudents() {
            axios
                .get("/api/students")
                .then((res) => {
                    this.students = res.data;
                })
                .catch((err) => {});
        },

        destroy(id) {
            if (!window.confirm("Are you sure to Delete data")) {
                return;
            }

            axios
                .delete("/api/students/" + id)
                .then((result) => {
                    if (result.status === 200) {
                        this.fetchStudents();
                    }
                })
                .catch((err) => {});
        },
    },
};
</script>
<style lang=""></style>
