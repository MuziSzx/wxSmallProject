'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Page({
    data: {
        current11: 0,
        items4: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg']

    },
    handleChange11: function handleChange11(e) {
        var index = e.detail.index;
        this.setData({
            current11: index
        });
    },
    handleContentChange11: function handleContentChange11(e) {
        var current = e.detail.current;
        this.setData({
            current11: current
        });
    }
});