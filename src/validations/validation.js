import * as Yup from "yup";

Yup.setLocale({
    mixed: {
        required: 'Bu sahəni boş buraxa bilməzsiniz',
        oneOf: 'Bu sahəni seçmək məcburiyyətindəsiniz'
    },
    string: {
        min: 'Bu sahə minumum ${min} xarakterli olmalıdır'
    }
})

export default Yup