export default {
    get name() {
        return 'ExpoScreenCapture';
    },
    async isAvailableAsync() {
        return false;
    },
    async preventScreenCaptureAsync(tag = 'default') {
        return null;
    },
    async allowScreenCaptureAsync(tag = 'default') {
        return null;
    },
    async usePreventScreenCapture(tag = 'default') {
        return null;
    },
};
//# sourceMappingURL=ExpoScreenCapture.web.js.map