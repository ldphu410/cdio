import * as Types from './../../constants/action-types/chuan-dau-ra';

const initialState = {
    data: [{
        key: "1",
        cdr: 'G1.1',
        description: 'Thành lập, tổ chức, vận hành và quản lý nhóm',
        levels: ["I", "U"],
    }, {
        key: "2",
        cdr: 'G1.2',
        description: 'Phân biệt được sự khác nhau giữa các mô hình phát triển phần mềm: mô hình thác nước, mô hình tiến hóa, mô hình phát triển dựa trên component có sẵn',
        levels: ["U"],
    }, {
        key: "3",
        cdr: 'G2.1',
        description: 'Giải thích được thuật ngữ tiếng Anh chuyên ngành của môn học',
        levels: ["I", "T", "U"],
    }]
}

const chuandaura = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_CDRDATA: {
            state.data.push(action.newData);
            return { ...state}
        }

        default:
            return { ...state };
    }
}

export default chuandaura;
