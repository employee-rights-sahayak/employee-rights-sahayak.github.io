// ---------------- Make an application: labour complaint / claim  +  RTI ----------------
// Everything is built inside the phone's browser. Nothing typed here is sent to our server or saved.
// Uses from app.js: LANG, st, STATES, PROBLEMS, esc, go, t, api.

  const DT = {
    hi: {
      title:"📝 अर्ज़ी बनाएँ — शिकायत / दावा या RTI", sub:"नीचे जानकारी भरें, अर्ज़ी अपने-आप तैयार होगी। फिर प्रिंट करें या PDF सेव करें।",
      private:"🔒 आपकी भरी जानकारी हमारे सर्वर पर नहीं जाती, कहीं सेव नहीं होती — सिर्फ़ आपके फ़ोन में अर्ज़ी बनती है।",
      typeClaim:"⚖️ लेबर ऑफ़िस में शिकायत / दावा", typeRti:"📨 RTI (सूचना का अधिकार)", letterLang:"अर्ज़ी की भाषा:",
      you:"आपकी जानकारी", name:"आपका नाम *", guardian:"पिता / पति का नाम", address:"आपका पूरा पता *", phone:"मोबाइल नंबर (चाहें तो)",
      district:"ज़िला *", work:"काम की जानकारी", employer:"कंपनी / मालिक का नाम *", employerAddr:"कंपनी / काम की जगह का पता",
      contractor:"ठेकेदार का नाम (अगर ठेकेदार के ज़रिए रखा गया)", job:"आपका काम (जैसे इलेक्ट्रीशियन)", join:"काम शुरू किया (तारीख़)",
      last:"आख़िरी दिन (अगर निकाला / छोड़ा)", wage:"तय मज़दूरी ₹", perDay:"प्रति दिन", perMonth:"प्रति महीना",
      due:"कुल बाक़ी पैसा ₹", period:"किस समय का (जैसे जून–अगस्त 2026)", details:"क्या हुआ — 2-3 लाइन में",
      rtiTo:"RTI किस दफ़्तर को?", toLabour:"राज्य श्रम विभाग (ज़िला कार्यालय)", toEpfo:"EPFO (PF दफ़्तर) — केंद्र सरकार", toEsic:"ESIC (ESI) — केंद्र सरकार",
      ask:"क्या जानकारी माँगनी है?", complaintNo:"पहले दी शिकायत का नंबर (अगर है)", complaintDate:"उस शिकायत की तारीख़", uan:"UAN नंबर (PF के लिए)",
      bpl:"मेरे पास BPL (गरीबी रेखा) कार्ड है — फ़ीस नहीं लगेगी", make:"✅ अर्ज़ी बनाएँ", need:"कृपया * वाले खाने भरें और राज्य चुनें।",
      ready:"आपकी अर्ज़ी तैयार है — ध्यान से पढ़ें, ग़लती हो तो ऊपर ठीक करके फिर बनाएँ।",
      print:"🖨️ प्रिंट / PDF सेव करें", copy:"📋 कॉपी करें", copied:"✅ कॉपी हो गया", download:"⬇️ फ़ाइल डाउनलोड करें",
      next:"अब आगे क्या करें", disclaimer:"यह एक नमूना अर्ज़ी है, क़ानूनी सलाह नहीं। जमा करने से पहले जाँच लें; ज़रूरत हो तो मुफ़्त क़ानूनी मदद 15100 (NALSA) पर फ़ोन करें।",
      openPortal:"ऑनलाइन RTI पोर्टल खोलें", openSamadhan:"SAMADHAN पोर्टल खोलें (ऑनलाइन शिकायत)", openEpfo:"EPFO शिकायत पोर्टल खोलें",
      makeBtn:"📝 अर्ज़ी / RTI बनाएँ (प्रिंट के लिए)",
    },
    en: {
      title:"📝 Make an application — complaint / claim or RTI", sub:"Fill in the details below and the application is made for you. Then print it or save it as PDF.",
      private:"🔒 What you type is not sent to our server and is not saved anywhere — the application is made only inside your phone.",
      typeClaim:"⚖️ Complaint / claim at the Labour Office", typeRti:"📨 RTI (Right to Information)", letterLang:"Language of the letter:",
      you:"Your details", name:"Your name *", guardian:"Father's / husband's name", address:"Your full address *", phone:"Mobile number (optional)",
      district:"District *", work:"About the work", employer:"Company / employer name *", employerAddr:"Address of the company / workplace",
      contractor:"Contractor's name (if hired through a contractor)", job:"Your work (e.g. electrician)", join:"Started work on (date)",
      last:"Last day (if removed / left)", wage:"Agreed wage ₹", perDay:"per day", perMonth:"per month",
      due:"Total money due ₹", period:"For which period (e.g. June–August 2026)", details:"What happened — in 2-3 lines",
      rtiTo:"Which office is the RTI for?", toLabour:"State Labour Department (district office)", toEpfo:"EPFO (PF office) — Central Government", toEsic:"ESIC (ESI) — Central Government",
      ask:"What information do you want?", complaintNo:"Number of your earlier complaint (if any)", complaintDate:"Date of that complaint", uan:"UAN number (for PF)",
      bpl:"I have a BPL card — no fee", make:"✅ Make the application", need:"Please fill the boxes marked * and choose your state.",
      ready:"Your application is ready — read it carefully; if something is wrong, correct it above and make it again.",
      print:"🖨️ Print / save PDF", copy:"📋 Copy", copied:"✅ Copied", download:"⬇️ Download file",
      next:"What to do next", disclaimer:"This is a sample application, not legal advice. Check it before you submit; if needed, call free legal aid 15100 (NALSA).",
      openPortal:"Open the online RTI portal", openSamadhan:"Open the SAMADHAN portal (online complaint)", openEpfo:"Open the EPFO grievance portal",
      makeBtn:"📝 Make application / RTI (to print)",
    },
  };
  const dt = k => (DT[LANG] || DT.hi)[k];

  // online RTI portals that were checked to open (2 Oct 2026); other states: send by post
  const RTI_PORTAL = {
    central: "https://rtionline.gov.in/", up: "https://rtionline.up.gov.in/", maharashtra: "https://rtionline.maharashtra.gov.in/",
    delhi: "https://rtionline.delhi.gov.in/", ka: "https://rtionline.karnataka.gov.in/", tn: "https://rtionline.tn.gov.in/", mp: "https://rti.mp.gov.in/",
  };
  const WAGE_CLAIM = ['salary', 'contractor', 'fired', 'overtime', 'minwage', 'bonus', 'equalpay', 'general'];
  const RTI_QS = { labour: ['q1', 'q2', 'q3', 'q4'], epfo: ['q1', 'q5'], esic: ['q1', 'q6'] };

  let draftType = 'claim', draftGuide = null, draftText = '';

  function field(id, label, type = 'text', extra = '') {
    return `<label class="dl"><span>${dt(label)}</span><input id="d-${id}" type="${type}" autocomplete="off" ${extra}/></label>`;
  }
  function rtiQLabel(q, L) {
    const H = {
      q1:"मेरी पहले दी गई शिकायत पर हुई कार्यवाही और अभी की स्थिति", q2:"कंपनी का श्रम विभाग में पंजीकरण / लाइसेंस (ठेका मज़दूर सहित)",
      q3:"पिछले 3 साल के निरीक्षण (inspection) की तारीख़ें और रिपोर्ट", q4:"मेरे काम के लिए अभी लागू न्यूनतम मज़दूरी की सरकारी सूचना",
      q5:"कंपनी PF में रजिस्टर है या नहीं + मेरे UAN में जमा पैसे का महीनेवार हिसाब", q6:"कंपनी ESIC में रजिस्टर है या नहीं + मेरे नाम पर जमा ESI का हिसाब" };
    const E = {
      q1:"Action taken on my earlier complaint and its present status", q2:"Registration / licence of the company with the Labour Department (incl. contract labour)",
      q3:"Dates and reports of inspections in the last 3 years", q4:"Government notification of the minimum wage now in force for my work",
      q5:"Whether the company is registered with EPFO + month-wise deposits in my UAN", q6:"Whether the company is registered with ESIC + ESI contributions in my name" };
    return (L === 'en' ? E : H)[q];
  }

  function renderDraft() {
    const box = document.getElementById('draftBox');
    const keep = {}; box.querySelectorAll('input[id^="d-"]:not([type=checkbox]), textarea, select').forEach(el => { if (el.id !== 'd-office') keep[el.id] = el.value; });
    const stateOpts = `<option value="">${t('chooseState')}</option>` + STATES.map(s =>
      `<option value="${esc(s.id)}" ${s.id === st.stateId ? 'selected' : ''}>${esc(LANG === 'en' ? s.name : (s.nameHi || s.name))}</option>`).join('');
    const office = (document.getElementById('d-office') || {}).value || (st.problemId === 'pf' ? 'epfo' : 'labour');
    box.innerHTML = `
      <div class="card"><div class="tabs2">
        <button type="button" class="tab ${draftType === 'claim' ? 'on' : ''}" data-dtype="claim">${dt('typeClaim')}</button>
        <button type="button" class="tab ${draftType === 'rti' ? 'on' : ''}" data-dtype="rti">${dt('typeRti')}</button></div>
        <div class="updated">${dt('private')}</div>
        <label class="dl"><span>${dt('letterLang')}</span><select id="d-lang"><option value="hi">हिंदी</option><option value="en" ${LANG === 'en' ? 'selected' : ''}>English</option></select></label></div>
      <div class="card"><h2>${dt('you')}</h2>
        ${field('name', 'name')}${field('guardian', 'guardian')}${field('address', 'address')}${field('phone', 'phone', 'tel', 'inputmode="tel" maxlength="15"')}
        <label class="dl"><span>${t('chooseState')} *</span><select id="d-state">${stateOpts}</select></label>${field('district', 'district')}</div>
      <div class="card"><h2>${dt('work')}</h2>
        ${field('employer', 'employer')}${field('employerAddr', 'employerAddr')}${field('contractor', 'contractor')}${field('job', 'job')}
        ${field('join', 'join', 'date')}${field('last', 'last', 'date')}
        ${draftType === 'claim' ? `
        <div class="dl2">${field('wage', 'wage', 'number', 'min="0" inputmode="numeric"')}
          <label class="dl"><span>&nbsp;</span><select id="d-unit"><option value="day">${dt('perDay')}</option><option value="month">${dt('perMonth')}</option></select></label></div>
        ${field('due', 'due', 'number', 'min="0" inputmode="numeric"')}${field('period', 'period')}
        <label class="dl"><span>${dt('details')}</span><textarea id="d-details" rows="3" maxlength="600"></textarea></label>` : `
        <label class="dl"><span>${dt('rtiTo')}</span><select id="d-office">
          <option value="labour" ${office === 'labour' ? 'selected' : ''}>${dt('toLabour')}</option>
          <option value="epfo" ${office === 'epfo' ? 'selected' : ''}>${dt('toEpfo')}</option>
          <option value="esic" ${office === 'esic' ? 'selected' : ''}>${dt('toEsic')}</option></select></label>
        <div class="dl"><span>${dt('ask')}</span>${RTI_QS[office].map(q => `<label class="chk"><input type="checkbox" data-q="${q}" checked/> ${rtiQLabel(q, LANG)}</label>`).join('')}</div>
        ${field('complaintNo', 'complaintNo')}${field('complaintDate', 'complaintDate', 'date')}${office === 'epfo' ? field('uan', 'uan', 'text', 'inputmode="numeric" maxlength="12"') : ''}
        <label class="chk"><input type="checkbox" id="d-bpl"/> ${dt('bpl')}</label>`}
      </div>
      <button class="big" type="button" id="d-make">${dt('make')}</button>
      <div id="d-out"></div>`;
    Object.entries(keep).forEach(([k, v]) => { const el = document.getElementById(k); if (el && v) el.value = v; });   // typed text survives a re-draw
    box.querySelectorAll('[data-dtype]').forEach(b => b.addEventListener('click', () => { draftType = b.dataset.dtype; renderDraft(); }));
    const off = document.getElementById('d-office'); if (off) off.addEventListener('change', renderDraft);
    document.getElementById('d-make').addEventListener('click', makeDraft);
  }

  const val = id => { const el = document.getElementById('d-' + id); return el ? el.value.trim().replace(/\s+/g, ' ').slice(0, 600) : ''; };
  const fmtDate = (d, L) => d ? new Date(d + 'T00:00').toLocaleDateString(L === 'en' ? 'en-IN' : 'hi-IN', { day:'numeric', month:'long', year:'numeric' }) : '';
  const money = n => n ? Number(n).toLocaleString('en-IN') : '';

  function claimText(v, L, g) {
    const q = g && g.lawQuote, act = q ? (L === 'en' ? q.act.en : q.act.hi) : '', sec = q ? q.sec : '';
    const p = PROBLEMS.find(x => x[3] === st.problemId), prob = p ? (L === 'en' ? p[2] : p[1]) : (L === 'en' ? 'Labour rights' : 'मज़दूरी / श्रम अधिकार');
    const id = st.problemId || 'general', wageClaim = WAGE_CLAIM.includes(id);
    let docs = []; try { const s = JSON.parse(localStorage.getItem('docs_' + id) || '{}'); docs = (g ? g.docs : []).filter((_, k) => s[k]); } catch (e) {}
    const today = fmtDate(new Date().toISOString().slice(0, 10), L);
    if (L === 'en') {
      const to = id === 'pf' ? 'The Regional Provident Fund Commissioner,\nEmployees\' Provident Fund Organisation (EPFO)'
        : id === 'posh' ? 'The District Officer / Local Committee,\nunder the Sexual Harassment of Women at Workplace Act, 2013'
        : wageClaim ? 'The Authority under Section 45 of the Code on Wages, 2019\n(Labour Officer / Assistant Labour Commissioner)'
        : 'The Labour Officer / Inspector-cum-Facilitator,\nLabour Department';
      return [
        'To,', to + ',', `District ${v.district}, ${v.state}`, ' ',
        `Subject: ${prob} — complaint${wageClaim ? ' and claim under Section 45 of the Code on Wages, 2019' : ''}`, ' ',
        'Sir / Madam,', ' ',
        `1. I, ${v.name}${v.guardian ? ', son/daughter/wife of ' + v.guardian : ''}, resident of ${v.address}, ${v.last ? 'worked' : 'am working'} at ${v.employer}${v.employerAddr ? ', ' + v.employerAddr : ''}${v.job ? ' as ' + v.job : ''}${v.join ? ' from ' + fmtDate(v.join, L) : ''}${v.last ? ' till ' + fmtDate(v.last, L) : ''}.`,
        v.contractor ? `2. I was engaged through the contractor ${v.contractor}. Under Section 55(3) of the OSH Code, 2020 the principal employer is also liable to pay unpaid wages.` : '',
        v.wage ? `3. My agreed wage was Rs. ${money(v.wage)} per ${v.unit === 'month' ? 'month' : 'day'}.` : '',
        v.due ? `4. Rs. ${money(v.due)}${v.period ? ' for the period ' + v.period : ''} has not been paid to me till date.` : '',
        v.details ? `5. Details: ${v.details}` : '',
        act ? `6. This is against ${act}, Section ${sec}.` : '',
        ' ', 'I therefore request you to:',
        wageClaim ? `(a) direct the employer to pay my dues${v.due ? ' of Rs. ' + money(v.due) : ''};\n(b) order compensation under Section 45(2) of the Code on Wages, 2019;\n(c) call the employer for a hearing and take action as per law.`
          : id === 'posh' ? '(a) inquire into my complaint as per the Act;\n(b) give me the interim relief allowed under the Act;\n(c) keep my identity confidential.'
          : '(a) inquire into my complaint;\n(b) get me my rights as per law;\n(c) take action against the employer as per law.',
        ' ', 'Documents attached (copies):', ...(docs.length ? docs.map((d, k) => `${k + 1}. ${d}`) : ['1. ______________', '2. ______________']),
        ' ', `Place: ${v.district}`, `Date: ${today}`, ' ', 'Signature / thumb impression: ______________',
        `Name: ${v.name}`, v.phone ? `Mobile: ${v.phone}` : '',
      ].filter(x => x !== '').join('\n').replace(/^ $/gm, '');
    }
    const to = id === 'pf' ? 'क्षेत्रीय भविष्य निधि आयुक्त,\nकर्मचारी भविष्य निधि संगठन (EPFO)'
      : id === 'posh' ? 'ज़िला अधिकारी / स्थानीय समिति (Local Committee),\nकार्यस्थल पर महिलाओं का यौन उत्पीड़न अधिनियम, 2013'
      : wageClaim ? 'प्राधिकारी (Authority), वेतन संहिता 2019 की धारा 45\n(श्रम अधिकारी / सहायक श्रम आयुक्त)'
      : 'श्रम अधिकारी / निरीक्षक-सह-सुविधाप्रदाता,\nश्रम विभाग';
    return [
      'सेवा में,', to + ',', `ज़िला ${v.district}, ${v.state}`, ' ',
      `विषय: ${prob} — शिकायत${wageClaim ? ' एवं वेतन संहिता 2019 की धारा 45 के तहत दावा' : ''}`, ' ',
      'महोदय / महोदया,', ' ',
      `1. मैं ${v.name}${v.guardian ? ', पुत्र/पुत्री/पत्नी ' + v.guardian : ''}, निवासी ${v.address}, ${v.employer}${v.employerAddr ? ', ' + v.employerAddr : ''} में${v.job ? ' ' + v.job + ' के रूप में' : ''}${v.join ? ' ' + fmtDate(v.join, L) + ' से' : ''}${v.last ? ' ' + fmtDate(v.last, L) + ' तक काम किया।' : ' काम कर रहा/रही हूँ।'}`,
      v.contractor ? `2. मुझे ठेकेदार ${v.contractor} के ज़रिए रखा गया था। OSH संहिता 2020 की धारा 55(3) के अनुसार बाक़ी मज़दूरी देने की ज़िम्मेदारी मुख्य मालिक (कंपनी) की भी है।` : '',
      v.wage ? `3. मेरी तय मज़दूरी ₹${money(v.wage)} ${v.unit === 'month' ? 'प्रति महीना' : 'प्रति दिन'} थी।` : '',
      v.due ? `4. ${v.period ? v.period + ' का ' : ''}₹${money(v.due)} आज तक मुझे नहीं दिया गया है।` : '',
      v.details ? `5. विवरण: ${v.details}` : '',
      act ? `6. यह ${act} की धारा ${sec} का उल्लंघन है।` : '',
      ' ', 'अतः आपसे निवेदन है कि:',
      wageClaim ? `(क) मालिक से मेरा बकाया${v.due ? ' ₹' + money(v.due) : ''} दिलवाया जाए;\n(ख) वेतन संहिता 2019 की धारा 45(2) के तहत मुआवज़ा भी दिलवाया जाए;\n(ग) मालिक को सुनवाई के लिए बुलाकर क़ानून के अनुसार कार्रवाई की जाए।`
        : id === 'posh' ? '(क) अधिनियम के अनुसार मेरी शिकायत की जाँच की जाए;\n(ख) अधिनियम में दी गई अंतरिम राहत दी जाए;\n(ग) मेरी पहचान गुप्त रखी जाए।'
        : '(क) मेरी शिकायत की जाँच की जाए;\n(ख) क़ानून के अनुसार मेरा हक़ दिलवाया जाए;\n(ग) मालिक पर क़ानून के अनुसार कार्रवाई की जाए।',
      ' ', 'संलग्न दस्तावेज़ (कॉपी):', ...(docs.length ? docs.map((d, k) => `${k + 1}. ${d}`) : ['1. ______________', '2. ______________']),
      ' ', `स्थान: ${v.district}`, `दिनांक: ${today}`, ' ', 'हस्ताक्षर / अँगूठा: ______________',
      `नाम: ${v.name}`, v.phone ? `मोबाइल: ${v.phone}` : '',
    ].filter(x => x !== '').join('\n').replace(/^ $/gm, '');
  }

  function rtiText(v, L) {
    const qs = [...document.querySelectorAll('#draftBox [data-q]:checked')].map(c => c.dataset.q);
    const today = fmtDate(new Date().toISOString().slice(0, 10), L);
    const ref = v.complaintNo ? (L === 'en' ? ` (complaint no. ${v.complaintNo}${v.complaintDate ? ', dated ' + fmtDate(v.complaintDate, L) : ''})` : ` (शिकायत संख्या ${v.complaintNo}${v.complaintDate ? ', दिनांक ' + fmtDate(v.complaintDate, L) : ''})`) : '';
    const firm = v.employer + (v.employerAddr ? ', ' + v.employerAddr : '');
    const Q = L === 'en' ? {
      q1:`Certified copies of the action taken, file notings and present status of my complaint${ref} against ${firm}.`,
      q2:`Whether ${firm} is registered / licensed with the Labour Department (including licence for contract labour); registration number and date.`,
      q3:`Dates of inspections of ${firm} in the last 3 years and certified copies of the inspection reports.`,
      q4:`Copy of the notification of the minimum wage now in force in ${v.state} for the work of ${v.job || 'my category'}.`,
      q5:`Whether ${firm} is registered with EPFO, its establishment code, and month-wise details of PF contributions deposited in my UAN ${v.uan || '__________'}.`,
      q6:`Whether ${firm} is registered with ESIC, and details of ESI contributions deposited in my name.` } : {
      q1:`${firm} के ख़िलाफ़ मेरी शिकायत${ref} पर की गई कार्यवाही, फ़ाइल नोटिंग और वर्तमान स्थिति की प्रमाणित प्रति।`,
      q2:`${firm} श्रम विभाग में पंजीकृत / लाइसेंसशुदा (ठेका श्रम लाइसेंस सहित) है या नहीं; पंजीकरण संख्या और तारीख़।`,
      q3:`पिछले 3 वर्षों में ${firm} के निरीक्षण की तारीख़ें और निरीक्षण रिपोर्ट की प्रमाणित प्रति।`,
      q4:`${v.state} में ${v.job || 'मेरे'} काम के लिए अभी लागू न्यूनतम मज़दूरी की अधिसूचना की प्रति।`,
      q5:`${firm} EPFO में पंजीकृत है या नहीं, उसका कोड नंबर, और मेरे UAN ${v.uan || '__________'} में जमा PF का महीनेवार विवरण।`,
      q6:`${firm} ESIC में पंजीकृत है या नहीं, और मेरे नाम पर जमा ESI अंशदान का विवरण।` };
    const office = val('office') || 'labour';
    const to = L === 'en'
      ? { labour:`The Public Information Officer,\nLabour Department, District ${v.district}, ${v.state}`, epfo:`The Central Public Information Officer,\nEmployees' Provident Fund Organisation (EPFO), Regional Office, ${v.district}`, esic:`The Central Public Information Officer,\nEmployees' State Insurance Corporation (ESIC), ${v.district}` }[office]
      : { labour:`लोक सूचना अधिकारी,\nश्रम विभाग, ज़िला ${v.district}, ${v.state}`, epfo:`केंद्रीय लोक सूचना अधिकारी,\nकर्मचारी भविष्य निधि संगठन (EPFO), क्षेत्रीय कार्यालय, ${v.district}`, esic:`केंद्रीय लोक सूचना अधिकारी,\nकर्मचारी राज्य बीमा निगम (ESIC), ${v.district}` }[office];
    const bpl = document.getElementById('d-bpl') && document.getElementById('d-bpl').checked;
    if (L === 'en') return [
      'To,', to, ' ', 'Subject: Application under Section 6(1) of the Right to Information Act, 2005', ' ', 'Sir / Madam,', ' ',
      `1. Name of applicant: ${v.name}${v.guardian ? ', son/daughter/wife of ' + v.guardian : ''}`, `2. Address: ${v.address}`, v.phone ? `3. Mobile: ${v.phone}` : '',
      ' ', 'Information required:', ...qs.map((q, k) => `${k + 1}. ${Q[q]}`), ' ',
      bpl ? 'I belong to the Below Poverty Line (BPL) category; a copy of my BPL card is attached. No fee is payable under Section 7(5) of the Act.'
          : 'The application fee of Rs. 10 is paid by ____________ (postal order / court fee stamp / online).',
      'I am a citizen of India. Please send the information to the address above.', ' ',
      `Place: ${v.district}`, `Date: ${today}`, ' ', 'Signature: ______________', `Name: ${v.name}`,
    ].filter(x => x !== '').join('\n').replace(/^ $/gm, '');
    return [
      'सेवा में,', to, ' ', 'विषय: सूचना का अधिकार अधिनियम, 2005 की धारा 6(1) के तहत आवेदन', ' ', 'महोदय / महोदया,', ' ',
      `1. आवेदक का नाम: ${v.name}${v.guardian ? ', पुत्र/पुत्री/पत्नी ' + v.guardian : ''}`, `2. पता: ${v.address}`, v.phone ? `3. मोबाइल: ${v.phone}` : '',
      ' ', 'माँगी गई जानकारी:', ...qs.map((q, k) => `${k + 1}. ${Q[q]}`), ' ',
      bpl ? 'मैं गरीबी रेखा से नीचे (BPL) की श्रेणी में हूँ, BPL कार्ड की प्रति संलग्न है। अधिनियम की धारा 7(5) के अनुसार शुल्क नहीं लगेगा।'
          : '₹10 का आवेदन शुल्क ____________ (पोस्टल ऑर्डर / कोर्ट फ़ीस टिकट / ऑनलाइन) द्वारा जमा किया गया है।',
      'मैं भारत का नागरिक हूँ। कृपया जानकारी ऊपर दिए पते पर भेजें।', ' ',
      `स्थान: ${v.district}`, `दिनांक: ${today}`, ' ', 'हस्ताक्षर: ______________', `नाम: ${v.name}`,
    ].filter(x => x !== '').join('\n').replace(/^ $/gm, '');
  }

  function nextSteps(L, office) {
    const s = STATES.find(x => x.id === val('state'));
    const portal = office === 'epfo' || office === 'esic' ? RTI_PORTAL.central : RTI_PORTAL[val('state')];
    const id = st.problemId || 'general';
    const hi = draftType === 'rti' ? [
      portal ? `ऑनलाइन: नीचे का बटन दबाकर RTI पोर्टल खोलें → "Submit Request" → "माँगी गई जानकारी" वाला हिस्सा कॉपी करके चिपकाएँ → ₹10 ऑनलाइन भरें (BPL हैं तो कार्ड की फ़ोटो लगाएँ)।`
             : 'आपके राज्य का ऑनलाइन RTI पोर्टल हमने अभी नहीं जोड़ा है — डाक से भेजें (अगला कदम)।',
      'डाक से: अर्ज़ी प्रिंट करें, दस्तख़त करें, ₹10 का पोस्टल ऑर्डर लगाएँ (कुछ राज्यों में कोर्ट फ़ीस टिकट या अलग फ़ीस), और रजिस्टर्ड डाक से भेजें। रसीद संभालकर रखें।',
      '30 दिन में जवाब मिलना चाहिए (धारा 7(1))। न मिले या अधूरा मिले तो 30 दिन के अंदर उसी दफ़्तर के प्रथम अपील अधिकारी को पहली अपील करें (धारा 19(1))।',
      'फिर भी न मिले तो 90 दिन के अंदर सूचना आयोग में दूसरी अपील करें (धारा 19(3))।',
    ] : [
      'अर्ज़ी की 2 कॉपी प्रिंट करें, दस्तख़त / अँगूठा लगाएँ, सबूतों की फ़ोटोकॉपी साथ लगाएँ।',
      id === 'pf' ? 'PF दफ़्तर (EPFO) में जमा करें, या EPFO शिकायत पोर्टल (EPFiGMS) पर ऑनलाइन करें।'
        : 'अपने ज़िले के श्रम कार्यालय में जमा करें और दूसरी कॉपी पर मुहर व तारीख़ वाली पावती (रसीद) ज़रूर लें। ऑनलाइन करना हो तो SAMADHAN पोर्टल पर यही टेक्स्ट कॉपी करके डालें।',
      WAGE_CLAIM.includes(id) ? 'बकाया पैसे का दावा 3 साल के अंदर करें (वेतन संहिता धारा 45(6))। अधिकारी 3 महीने में फ़ैसला करने की कोशिश करते हैं (धारा 45(2))।' : '',
      id === 'fired' ? 'लेबर कोर्ट: ग़लत तरीके से निकाला गया हो तो श्रम विभाग के समझौता अधिकारी (Conciliation Officer) को अर्ज़ी दें (SAMADHAN पर भी)। 45 दिन में हल न हो तो सीधे औद्योगिक न्यायाधिकरण (लेबर कोर्ट) में अर्ज़ी दे सकते हैं — निकाले जाने के 2 साल के अंदर (औद्योगिक संबंध संहिता 2020, धारा 4(10)-(11))।' : '',
      'कोई सुनवाई न हो तो RTI से अपनी शिकायत की स्थिति पूछें (ऊपर "RTI" चुनें)। मुफ़्त वकील: 15100 (NALSA)।',
    ];
    const en = draftType === 'rti' ? [
      portal ? 'Online: press the button below to open the RTI portal → "Submit Request" → copy and paste the "Information required" part → pay Rs. 10 online (if BPL, attach a photo of the card).'
             : 'We have not added the online RTI portal of your state yet — send it by post (next step).',
      'By post: print, sign, attach a Rs. 10 postal order (some states use a court fee stamp or a different fee) and send by registered post. Keep the receipt.',
      'A reply must come within 30 days (Section 7(1)). If not, or incomplete, file a first appeal within 30 days to the First Appellate Authority of the same office (Section 19(1)).',
      'If still not, file a second appeal to the Information Commission within 90 days (Section 19(3)).',
    ] : [
      'Print 2 copies, sign / put your thumb impression, attach photocopies of your proof.',
      id === 'pf' ? 'Submit at the PF office (EPFO), or online on the EPFO grievance portal (EPFiGMS).'
        : 'Submit at your district Labour Office and get a stamped, dated receipt on the second copy. To do it online, paste this text on the SAMADHAN portal.',
      WAGE_CLAIM.includes(id) ? 'Claim unpaid money within 3 years (Code on Wages, Section 45(6)). The authority tries to decide within 3 months (Section 45(2)).' : '',
      id === 'fired' ? 'Labour court: if you were removed wrongly, apply to the Conciliation Officer of the Labour Department (also on SAMADHAN). If it is not settled in 45 days you can apply directly to the Industrial Tribunal (labour court) — within 2 years of removal (Industrial Relations Code 2020, Section 4(10)-(11)).' : '',
      'If nothing happens, ask the status of your complaint through RTI (choose "RTI" above). Free lawyer: 15100 (NALSA).',
    ];
    const links = draftType === 'rti'
      ? (portal ? [[portal, dt('openPortal')]] : [])
      : (id === 'pf' ? [['https://epfigms.gov.in/', dt('openEpfo')]] : [['https://samadhan.labour.gov.in/', dt('openSamadhan')]]);
    return { steps: (L === 'en' ? en : hi).filter(Boolean), links, stateName: s ? s.name : '' };
  }

  function makeDraft() {
    const L = val('lang') === 'en' ? 'en' : 'hi';
    const s = STATES.find(x => x.id === val('state'));
    const v = { name: val('name'), guardian: val('guardian'), address: val('address'), phone: val('phone'), district: val('district'),
      state: s ? (L === 'en' ? s.name : (s.nameHi || s.name)) : '', employer: val('employer'), employerAddr: val('employerAddr'),
      contractor: val('contractor'), job: val('job'), join: val('join'), last: val('last'), wage: val('wage'), unit: val('unit'),
      due: val('due'), period: val('period'), details: val('details'), complaintNo: val('complaintNo'), complaintDate: val('complaintDate'), uan: val('uan') };
    const out = document.getElementById('d-out');
    if (!v.name || !v.address || !v.district || !v.employer || !s) { out.innerHTML = `<div class="status">⚠️ ${dt('need')}</div>`; return; }
    draftText = draftType === 'rti' ? rtiText(v, L) : claimText(v, L, draftGuide);
    const n = nextSteps(LANG, val('office') || 'labour');
    out.innerHTML = `
      <div class="card"><div class="updated" style="margin-top:0">${dt('ready')}</div>
        <div class="letter" id="d-letter"></div>
        <div class="row2"><button class="big" type="button" id="d-print">${dt('print')}</button><button class="big light" type="button" id="d-copy">${dt('copy')}</button></div>
        <button class="big light" type="button" id="d-dl">${dt('download')}</button></div>
      <div class="card"><h2>${dt('next')}</h2><ol class="steps-list">${n.steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol>
        <div class="doclinks">${n.links.map(([u, l]) => `<a href="${esc(u)}" target="_blank" rel="noopener">🌐 <span>${esc(l)}</span> ↗</a>`).join('')}</div>
        <div class="note">${dt('disclaimer')}</div></div>`;
    document.getElementById('d-letter').textContent = draftText;     // plain text: nothing typed can turn into page code
    document.getElementById('d-print').addEventListener('click', () => window.print());
    document.getElementById('d-copy').addEventListener('click', async e => {
      try { await navigator.clipboard.writeText(draftText); e.target.textContent = dt('copied'); } catch (err) { window.getSelection().selectAllChildren(document.getElementById('d-letter')); }
    });
    document.getElementById('d-dl').addEventListener('click', () => {
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['﻿' + draftText], { type: 'text/plain;charset=utf-8' }));
      a.download = (draftType === 'rti' ? 'RTI_' : 'arzi_') + new Date().toISOString().slice(0, 10) + '.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    });
    out.scrollIntoView({ behavior: 'smooth' });
  }

  async function openDraft(type) {
    draftType = type || draftType;
    document.getElementById('draftTitle').textContent = dt('title');
    document.getElementById('draftSub').textContent = dt('sub');
    go('draft');
    draftGuide = null;
    try { draftGuide = await api.guide(st.problemId || 'general'); } catch (e) {}
    renderDraft();
  }
  ACTIONS.draftClaim = () => openDraft('claim');
  ACTIONS.draftRti = () => openDraft('rti');
  function draftLabels() { document.querySelectorAll('[data-dt]').forEach(el => el.textContent = dt(el.dataset.dt)); }
  draftLabels();
  document.getElementById('langBtn').addEventListener('click', () => { draftLabels(); if (document.getElementById('s-draft').classList.contains('on')) openDraft(); });
