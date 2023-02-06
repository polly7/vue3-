import { reactive, ref } from "vue";
export default function () {
    const num = ref(0)
    const add = () => {
        console.log('增加')
        num.value++
    }
    const subtraction = () => {
        num.value--
    }
    return {
        num,
        add,
        subtraction
    }
}