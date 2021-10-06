<template>
    <div class="container is-fluid">
        <form v-on:submit.prevent="submitForm">
            <h3 class="has-text-weight-semibold has-text-left"> Data Siswa </h3>
            <div class="is-flex is-justify-content-flex-end mb-4">
                <b-button
                    type="is-primary"
                    size="is-medium"
                    @click="isOpen = !isOpen"
                    aria-controls="contentIdForA11y2">
                    <span> Tambah Data </span>
                </b-button>
            </div>
            <ListTable v-bind:students='students' />
            <div class="pb-6">
                <b-collapse
                    aria-id="contentIdForA11y2"
                    class="panel card"
                    animation="slide"
                    v-model="isOpen">
                    <div class="container">
                        <AddData @add-student="addStudent" />
                    </div>
                </b-collapse>
            </div>
        </form>
    </div>
</template>

<script>
import ListTable from "../views/ListTable.vue"
import AddData from "../views/AddData.vue"

export default {
    components:{
        ListTable,
        AddData
    },
    data() {
        return {
            students: [
                {
                    id: 1,
                    name: 'Bambang',
                    address: 'Jl.Kenanga',
                    gender: 'Male',
                    searchName: 'Jawa Timur',
                    selectedDate: '1997-11-03'
                },
                {
                    id: 2,
                    name: 'Dika',
                    address: 'Jl.Mangga',
                    gender: 'Male',
                    searchName: 'Jawa Tengah',
                    selectedDate: '1997-06-04'
                },
                {
                    id: 3,
                    name: 'Agus',
                    address: 'Jl.Mataram',
                    gender: 'Male',
                    searchName: 'Jawa Barat',
                    selectedDate: '1997-03-25'
                },
            ],
            isOpen: false
        }
    },
    methods: {
        addStudent(student) {
            this.students.push(student);
        } 
    }
}
</script>