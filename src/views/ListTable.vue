<template>
    <table class="table table-bordered">
        <thead>
            <tr> 
            <th scope="col">Nama</th>
            <th scope="col">Alamat</th>
            <th scope="col">Gender</th>
            <th scope="col">Daerah</th>
            <th scope="col">Tanggal Lahir</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student.id"> 
            <td>{{ student.name }}</td>
            <td> {{ student.address }} </td> 
            <td> {{ student.gender }} </td> 
            <td> {{ student.searchName }} </td> 
            <td> {{ student.selectedDate }} </td> 
            </tr>
        </tbody>
    </table>
</template>

<script>
  export default {
    name: 'student-table',
    props: {
        students: Array,
    }
  }
</script>

<style scoped>

</style>
