export default function ({store, redirect}) {
    if(!store.getters.getComeFromGame){
        return redirect('/')
    }
}