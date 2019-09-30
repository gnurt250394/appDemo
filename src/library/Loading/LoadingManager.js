class LoadingManager {
    loadingRef = null;
    registerLoading = (loadingRef) => {
        this.loadingRef = loadingRef
    }
    getDefault = () => {
        return this.loadingRef
    }
}
export default new LoadingManager()