<template>
  <div class="py-5">
    <h3 class="has-text-weight-semibold has-text-left pb-4"> Tambah Data </h3>
    <form @submit.prevent="submit" class="has-text-left">
      <div class="form-group mb-3">
        <label for="name">Nama</label>
        <input type="text" v-model="student.name" class="form-control" placeholder="Masukan nama pelanggan">
      </div>
      <div class="form-group mb-3">
        <label for="address">Alamat</label>
        <textarea type="text" v-model="student.address" class="form-control" 
          placeholder="Masukan alamat pelanggan"> </textarea>
      </div>
      <div class="form-group mb-3">
        <label for="address">Gender</label>
        <RadioBtn v-bind:choices="student.choices" :radioButton="student.gender"/>
      </div>
      <div class="form-group mb-3">
        <label for="address">Daerah Kota</label>
        <b-field>
            <b-autocomplete
                v-model="student.searchName"
                :data="filteredDataArray"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete>
        </b-field>
      </div>
      <div class="form-group mb-3">
        <b-field label="Select a date">
            <b-datepicker v-model="student.selectedDate" :mobile-native="false">
                <template v-slot:trigger>
                    <b-button
                        icon-left="calendar-today"
                        type="is-primary" />
                </template>
            </b-datepicker>
            <b-input expanded readonly :value="selectedString" />
        </b-field>
      </div>
      
      <button type="submit" class="btn btn-primary mr-2 mt-3 w-100">Submit</button>
    </form>
  </div>
</template>

<script>
    import RadioBtn from "../components/RadioBtn.vue"

    export default {
        name: 'student-form', 
        components:{
            RadioBtn
        },
        data(){
            return {
                student: {
                    name: '',
                    address: '',
                    choices: [ 'Male', 'Female'],
                    gender: '',
                    searchName: '',
                    selectedDate: new Date(),
                    showWeekNumber: false,
                },
                selected: null,
                searchData: [
                    'Jawa Timur',
                    'Jawa Tengah',
                    'Jawa Barat',
                    'Kalimantan',
                    'Sumatera',
                    'Sulawesi',
                    'NTT',
                    'NTB',
                ]
            }
        },
        computed: {
            filteredDataArray() {
                return this.searchData.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.student.searchName.toLowerCase()) >= 0
                })
            },
            selectedString() {
                return this.student.selectedDate ? this.student.selectedDate.toDateString() : ''
            }
        },
        methods: {
            async submit() {
                this.$emit('add-student', this.student)
                this.student = {
                    name: '',
                    address: '',
                    gender: '',
                    searchName: '',
                    selectedDate: '',
                }
            },
            clearDate () {
                this.student.selectedDate = null
            }
    },
}
</script>