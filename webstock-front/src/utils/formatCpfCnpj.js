export default function formatCpfCnpj(value) {
    let text = String(value).trim()

    text = text.replace(/[^\d]/g, "");

    if (text.length === 11) {
        return text.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (text.length === 14) {
        return text.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
    }

    return 'n/a'
}
