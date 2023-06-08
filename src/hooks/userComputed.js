import { reactive, ref } from "vue";
export default function () {
    const num = ref(0)
    const add = () => {
        // num.value++
        // const str = '告诉老墨,我要吃鱼'
        // Math.random() * 50
        const arr = [1, 0, 2, 4]
        const newArr = arr.sort()
        console.log(newArr, 'arr')
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