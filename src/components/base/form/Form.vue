<template lang='pug'>
form
    fieldset
        label(for="username")
            span Username
            input(id="username" type="text" name="username" v-model="username" required)
    fieldset
        label(for="password")
            span Password
            input(id="password" type="password" name="password" v-model="password" required spellchecl="false" placeholder="password")
            small We'll never share your email with anyone else.
    label(for="email")
        span Email
        input(id="email" type="email" name="email" v-model="email" required spellchecl="false" )
    label(for="checkbox")
        span checkbox
        input(type="checkbox" name="checkbox" v-model="checkbox" required placeholder="checkbox")
    label(for="message")
        span message
        input(type="text" name="message" v-model="message" required placeholder="message")
    input(type="submit" value="Send Message")
</template>

<script>
import {ref} from '@vue/composition-api'
export default {
   setup(){
        const username= ref('')
        const password= ref('')
        const email= ref('')
        const checkbox= ref('')
       return {
           username,
           password,
           email,
           checkbox
       }
   }
}
</script>
