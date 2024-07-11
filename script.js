moment.locale('pt-br');

function formatDayOfWeek(day) {
    const parts = day.split('-');
    if (parts.length > 1) {
        parts[1] = 'Feira';
    }
    return parts.join('-').charAt(0).toUpperCase() + parts.join('-').slice(1);
}

function displayTime() {
    const now = moment().tz('America/Sao_Paulo');
    const dayOfWeek = formatDayOfWeek(now.format('dddd'));
    const date = now.format('DD/MM/YYYY');
    const hours = now.format('HH');
    const minutes = now.format('mm');
    const seconds = now.format('ss');
    document.getElementById('clock').innerHTML = `${dayOfWeek}<br><br>${date}<br><br>${hours}:${minutes}:${seconds}`;
}

setInterval(displayTime, 1000);
