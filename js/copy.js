'use strict';

(() => {
    const button = document.getElementById('copy-address');
    const address = document.getElementById('server-address');
    const status = document.getElementById('copy-status');
    if (!button || !address || !status) return;

    function fallbackCopy(text) {
        const previousFocus = document.activeElement;
        const selection = window.getSelection();
        const ranges = selection ? Array.from({ length: selection.rangeCount }, (_, i) => selection.getRangeAt(i).cloneRange()) : [];
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.readOnly = true;
        textarea.className = 'copy-fallback';
        textarea.setAttribute('aria-label', '待复制的服务器地址');
        document.body.appendChild(textarea);
        try {
            textarea.focus({ preventScroll: true });
            textarea.select();
            textarea.setSelectionRange(0, textarea.value.length);
            return document.execCommand('copy');
        } catch {
            return false;
        } finally {
            textarea.remove();
            if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
            if (selection) {
                selection.removeAllRanges();
                ranges.forEach(range => selection.addRange(range));
            }
        }
    }

    button.addEventListener('click', async () => {
        const text = address.textContent.trim();
        status.textContent = '正在复制…';
        let copied = false;
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                copied = true;
            }
        } catch {
            // Clipboard permission may be unavailable; try the local fallback.
        }
        if (!copied) copied = fallbackCopy(text);
        status.textContent = copied
            ? '已复制服务器地址。地址与客户端版本以群公告为准。'
            : '复制失败，请选中地址 play.missdrop.cn 手动复制。';
    });
})();
