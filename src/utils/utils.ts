function formatDate(dateString: string) {
    const parts = dateString.split('-').map(part => parseInt(part, 10));
    
    const event = new Date(parts[0], parts[1] - 1, parts[2]);

    const day = event.getDate();
    let suffix;

    switch (day) {
        case 1: case 21: case 31:
            suffix = 'st';
            break;
        case 2: case 22:
            suffix = 'nd';
            break;
        case 3: case 23:
            suffix = 'rd';
            break;
        default:
            suffix = 'th';
    }

    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    let formattedDate = event.toLocaleDateString('en-US', options);

    return formattedDate.replace(/\d+/, `${day}${suffix}`);
}

export { formatDate }