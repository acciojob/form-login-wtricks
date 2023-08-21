function getFormvalue() {
    const f = document.querySelector("[name='fname']").value;
	const l = document.querySelector("[name='lname']").value;

	alert(`${f} ${l}`);
}
