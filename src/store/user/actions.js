export default {
    //state action mutations 内容
    async setGoods(content, payload) {
        let result = await api.getGoods(payload.id)
        content.commit('changeGoods', result.data)
    }
}