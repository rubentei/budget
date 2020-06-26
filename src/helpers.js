export const reviewBudget = (budget, remaining) => {
    let customClass;

    if ( ( budget / 4 ) > remaining ) {
        customClass = 'alert alert-danger';
    } else if ( ( budget / 2 ) > remaining ) {
        customClass = 'alert alert-warning';
    } else {
        customClass = 'alert alert-success';
    }

    return customClass;
}