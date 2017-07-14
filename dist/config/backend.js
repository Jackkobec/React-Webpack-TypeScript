var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from 'isomorphic-fetch';
function parseResponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        let contentType = response.headers.get('content-type');
        const text = yield response.text();
        if (!contentType || contentType.indexOf('application/json') == -1)
            return text;
        // convert LocalDate, LocalDateTime to js Date object
        return JSON.parse(text, (key, val) => {
            if (typeof val == 'string') {
                // LocalDateTime
                if (/^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(val)) {
                    return new Date(val);
                }
                // LocalDate
                if (/^\d\d\d\d-\d\d-\d\d$/.test(val)) {
                    return new Date(val);
                }
            }
            return val;
        });
    });
}
export function get(resource, params = undefined) {
    return rest('GET', resource, params, undefined);
}
export function post(resource, body = {}, qs = undefined) {
    return rest('POST', resource, qs, body);
}
export function put(resource, body = {}, qs = undefined) {
    return rest('PUT', resource, qs, body);
}
export function del(resource) {
    return rest('DELETE', resource, undefined, undefined);
}
export function rest(method, url, queryString, body) {
    //для кодировки запроса
    url = url + renderQueryString(queryString); //
    const headers = {};
    if (typeof body == 'object' || typeof body == 'number') {
        if (!(body instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
            body = JSON.stringify(body);
        }
    }
    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
            body,
            headers,
            cache: 'no-cache',
            credentials: 'same-origin'
        })
            .then(response => parseResponse(response))
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
    // для кодировки запросов на бэк
    function renderQueryString(qs) {
        if (!qs)
            return '';
        let r = '';
        Object.keys(qs).forEach(key => {
            if (qs[key] == null)
                return;
            if (r != '')
                r += '&';
            r += `${key}=${encodeURIComponent(formatParam(qs[key]))}`;
        });
        return `?${r}`;
    }
    function formatParam(param) {
        function pad2(n) {
            if (n < 10)
                return '0' + n;
            return '' + n;
        }
        if (param instanceof Date) {
            // 2007-12-03 is backend accepted format, see JacksonConfiguration
            return `${param.getFullYear()}-${pad2(1 + param.getMonth())}-${pad2(param.getDate())}`;
        }
        return '' + param;
    }
}
//# sourceMappingURL=backend.js.map