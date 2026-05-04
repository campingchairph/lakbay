/* --- BUDGET EDIT --- */
function openBudgetEdit() {
  var beAmt = document.getElementById('be-amt');
  var beTot = document.getElementById('be-tot');
  var bePp  = document.getElementById('be-pp');
  if (beAmt) beAmt.value = S.budgetAmount || '';
  if (beTot) beTot.classList.toggle('active', S.budgetType !== 'pp');
  if (bePp)  bePp.classList.toggle('active',  S.budgetType === 'pp');
  openSheet('sh-budget-edit');
}

function setBudgetEditType(t) {
  S.budgetType = t;
  document.getElementById('be-tot').classList.toggle('active', t !== 'pp');
  document.getElementById('be-pp').classList.toggle('active',  t === 'pp');
}

function saveBudgetEdit() {
  var v = parseFloat(document.getElementById('be-amt').value) || 0;
  if (!v) { document.getElementById('be-amt').focus(); return; }
  S.budgetAmount = v;
  closeSheet('sh-budget-edit');
  renderBudgetStats();
  renderExpList();
}

/* --- TEST AS JOINER --- */
function testAsJoiner() {
  var name = prompt('Enter a test joiner name (or leave blank for "Guest"):','');
  var jName = (name || 'Guest').trim();
  if (!MEMBERS.find(function(m){ return m.name === jName; })) {
    MEMBERS.push({id:'mtest'+Date.now(), name:jName, role:'guest', roles:['guest'], bg:'#888780', fg:'#F1EFE8'});
  }
  S.isOwner = false;
  S.user = {name: jName};
  applyRoleUI();
  switchTab('tour', document.querySelector('.tab-btn'));
  alert('Viewing as "' + jName + '" (Pasahero). Use Group tab > Change Role to test permissions. Go Home to return as organizer.');
}
