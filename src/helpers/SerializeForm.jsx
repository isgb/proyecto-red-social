export const SerializeForm = (form) => {

    const formData = new FormData(form);

    const completeOj = {};

    // console.log(formData);
    for(let [name, value] of formData){
        // console.log(name,value);
        completeOj[name] = value;
    }

    return completeOj;
}