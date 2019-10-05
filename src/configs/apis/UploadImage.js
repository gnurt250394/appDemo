import apis from 'configs/apis'

export const uploadImage = (data) => {
    let formData = new FormData()
    formData.append('image', {
        uri: 'file://' + data,
        type: 'image/png',
        name: new Date().getTime() + '.png',
    });
    return apis.postForm(apis.PATH.UPLOAD_IMAGE, formData)
}
