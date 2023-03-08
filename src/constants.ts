import { EAppStates } from "./types"

export const actionKeys = {
    takePhoto: 'p',
    retry: 'r',
    download: 'd'
}

export const Hints = {
    [EAppStates.INITIAL]: `Press <kbd>${actionKeys.takePhoto}</kbd> to take a photo`,
    [EAppStates.CAPTURED]: `Press <kbd>${actionKeys.download}</kbd> to download the image or <kbd>${actionKeys.retry}</kbd> to try again`,
}