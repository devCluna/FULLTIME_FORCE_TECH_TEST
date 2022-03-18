import { PICK_REPO } from "./selectedRepoTypes";

export const pickRepo = (repo) => {
    return {
        type: PICK_REPO,
        payload: repo
    }
}
