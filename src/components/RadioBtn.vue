<template>
    <div>
        <b-field>
            <b-radio :v-model="radioButton"
                :native-value="radioButton"
                name="gender"
                v-for="(choice, id) in choices" :key="id"
                class="mr-4"
            >
                <span class="pl-1"> {{ choice }} </span>
            </b-radio>
        </b-field>
    </div>
</template>

<script>
 export default {
    props: ['choices', 'radioButton'],
 }
</script>