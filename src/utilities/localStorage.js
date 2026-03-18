// get current list from storage

const getStoredInstalledApps = () => {
    const storedInstalledApps = localStorage.getItem("installedApps");
    return storedInstalledApps ? JSON.parse(storedInstalledApps) : []
}

// add new id to the storage

const addInstalledApptoStorage = (id) => {
    const storedApps = getStoredInstalledApps();

    // add if it doesn't exist already
    if (!storedApps.includes(id)) {
        storedApps.push(id);
        localStorage.setItem("installedApps", JSON.stringify(storedApps));
        return true
    }
    else return false
}

// delete from local storage

const removeFromLocalStorage = (id) => {
    const storedApps = getStoredInstalledApps();

    const remainingApps = storedApps.filter(appId => appId !== id)

    localStorage.setItem('installedApps', JSON.stringify(remainingApps));
}

export { getStoredInstalledApps, addInstalledApptoStorage, removeFromLocalStorage }