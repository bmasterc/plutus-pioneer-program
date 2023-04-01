import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-datetimepicker.min.css';
import * as L from 'lucid-cardano';

let plutusScripts = {
    misteryScript: {
        script: {   type: "PlutusV2",
                        script: "590ba1590b9e010000323232332232323332223232323232323233223233223232323232333222323232323232323232322323232223232533532323232325335533553353300e500235005222003133350105017335014335016502d0323350153502e35005222001032500110311032133573892012442656e69666963696172793120646964206e6f74207369676e206f7220746f206c6174650003110321533553353300e5002350052220021333501050173350143350163502e3370090011a80291100081919a80aa816019280088188819099ab9c49012842656e69666963696172793220646964206e6f74207369676e206f7220697320746f206561726c79000311355001222222222222005135001220023333573466e1cd55cea80224000466442466002006004646464646464646464646464646666ae68cdc39aab9d500c480008cccccccccccc88888888888848cccccccccccc00403403002c02802402001c01801401000c008cd409c0a0d5d0a80619a8138141aba1500b33502702935742a014666aa056eb940a8d5d0a804999aa815bae502a35742a01066a04e0686ae85401cccd540ac0d5d69aba150063232323333573466e1cd55cea80124000466a0486464646666ae68cdc39aab9d5002480008cd40a8cd40fdd69aba150023043357426ae8940088c98c8114cd5ce02402382189aab9e5001137540026ae854008c8c8c8cccd5cd19b8735573aa0049000119a81499a81fbad35742a00460866ae84d5d1280111931902299ab9c048047043135573ca00226ea8004d5d09aba2500223263204133573808808607e26aae7940044dd50009aba1500533502775c6ae854010ccd540ac0c48004d5d0a801999aa815bae200135742a00460666ae84d5d1280111931901e99ab9c04003f03b135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d55cf280089baa00135742a00860466ae84d5d1280211931901799ab9c03203102d3333573466e1cd55ce9baa0054800080c08c98c80b8cd5ce0188180161999ab9a3370e6aae75401d2000233322212333001004003002375c6ae85401cdd71aba15006375a6ae84d5d1280311931901699ab9c03002f02b102e13263202c3357389201035054350002e135573ca00226ea80044d5d1280089aab9e500113754002446a004444444444444a66a666aa601e2400264246600244a66a004420062002004a0464a66a666ae68cdc780700081981909a8128008a812002108198818990009aa8131108911299a80089a80191000910999a802910011802001199aa98038900080280200089111a801111a801111a802911a801112999a999a8068058030010a99a8008a99a8028999a80600580180388160999a80600580180388160999a80600580180389111a801111a801912999a999a8040038020010a99a80188008814081388140911191919192999a80310a999a80310a999a80410980224c26006930a999a80390980224c2600693080888078a999a80390980224c26006930a999a80310980224c260069308080a999a80290807080788068a999a80290a999a803909802a4c26008930a999a803109802a4c2600893080808070a999a803109802a4c26008930a999a802909802a4c2600893080792999a80290a999a80390a999a80390999a8058050010008b0b0b08078a999a80310a999a80310999a8050048010008b0b0b0807080692999a80210a999a80310a999a80310999a8050048010008b0b0b08070a999a80290a999a80290999a8048040010008b0b0b0806880612999a80190a999a80290a999a80290999a8048040010008b0b0b08068a999a80210a999a80210999a8040038010008b0b0b0806080592999a80110a999a80210a999a80210999a8040038010008b0b0b08060a999a80190a999a80190999a8038030010008b0b0b08058805091a800911111110038910919800801801091091980080180109109198008018010891999999980091199ab9a3370e00400203c03a44a66a666ae68cdc380100080f00e88030a99a999ab9a3371200400203c03a2008200a44666ae68cdc400100080f00e91199ab9a3371200400203c03a44666ae68cdc480100080e80f11199ab9a3371000400203a03c44a66a666ae68cdc480100080f00e8800880111299a999ab9a3371200400203c03a200420022444006244400424440022464460046eb0004c8004d5406c88cccd55cf80092805119a80498021aba1002300335744004036464646666ae68cdc39aab9d5002480008cc8848cc00400c008c038d5d0a80118029aba135744a004464c6403266ae7007006c05c4d55cf280089baa0012323232323333573466e1cd55cea8022400046666444424666600200a0080060046464646666ae68cdc39aab9d5002480008cc8848cc00400c008c05cd5d0a80119a80780b1aba135744a004464c6403c66ae700840800704d55cf280089baa00135742a008666aa010eb9401cd5d0a8019919191999ab9a3370ea0029002119091118010021aba135573ca00646666ae68cdc3a80124004464244460020086eb8d5d09aab9e500423333573466e1d400d20002122200323263202033573804604403c03a03826aae7540044dd50009aba1500233500b75c6ae84d5d1280111931900d19ab9c01d01c018135744a00226ae8940044d55cf280089baa0011335500175ceb44488c88c008dd5800990009aa80c11191999aab9f00225008233500733221233001003002300635573aa004600a6aae794008c010d5d100180c89aba100111220021221223300100400312232323333573466e1d400520002350073005357426aae79400c8cccd5cd19b875002480089401c8c98c8054cd5ce00c00b80980909aab9d5001137540022424460040062244002464646666ae68cdc3a800a400c46424444600800a600e6ae84d55cf280191999ab9a3370ea004900211909111180100298049aba135573ca00846666ae68cdc3a801a400446424444600200a600e6ae84d55cf280291999ab9a3370ea00890001190911118018029bae357426aae7940188c98c804ccd5ce00b00a80880800780709aab9d500113754002464646666ae68cdc39aab9d5002480008cc8848cc00400c008c014d5d0a8011bad357426ae8940088c98c803ccd5ce00900880689aab9e5001137540024646666ae68cdc39aab9d5001480008dd71aba135573ca004464c6401a66ae7004003c02c4dd5000919191919191999ab9a3370ea002900610911111100191999ab9a3370ea004900510911111100211999ab9a3370ea00690041199109111111198008048041bae35742a00a6eb4d5d09aba2500523333573466e1d40112006233221222222233002009008375c6ae85401cdd71aba135744a00e46666ae68cdc3a802a400846644244444446600c01201060186ae854024dd71aba135744a01246666ae68cdc3a8032400446424444444600e010601a6ae84d55cf280591999ab9a3370ea00e900011909111111180280418071aba135573ca018464c6402c66ae7006406005004c04804404003c0384d55cea80209aab9e5003135573ca00426aae7940044dd50009191919191999ab9a3370ea002900111999110911998008028020019bad35742a0086eb4d5d0a8019bad357426ae89400c8cccd5cd19b875002480008c8488c00800cc020d5d09aab9e500623263200f33573802402201a01826aae75400c4d5d1280089aab9e500113754002464646666ae68cdc3a800a400446424460020066eb8d5d09aab9e500323333573466e1d400920002321223002003375c6ae84d55cf280211931900619ab9c00f00e00a009135573aa00226ea8004488c8c8cccd5cd19b87500148010940188cccd5cd19b875002480088d4024c018d5d09aab9e500423333573466e1d400d20002500923263200d33573802001e01601401226aae7540044dd5000890911180180208911001089110009191999ab9a3370ea0029001100311999ab9a3370ea0049000100311931900319ab9c009008004003135573a6ea8005261220021220011200149010350543100112323001001223300330020020011"
    }}, 
    parameterizedMisteryScript: {
        script: {   type: "PlutusV2",
                    script: "590b10590b0d010000332323233223232332232323232323232332232332232323232323232323332223232323222223232533532323232533553353235001222222222222533533355301812001321233001225335002210031001002502a25335333573466e3c0600040e40e04d40b0004540ac010840e440dd400440ac4cd5ce249196e6f74207369676e65642062792062656e65666963696172790002a15335323232350022235002223500522350022253335333501800b00600215335001153350051333501700b00300710351333501700b00300710351333501700b0030073550032222222222220053350133350153502800502c335014502702c123333333300122333573466e1c0080040b80b4894cd4ccd5cd19b8700200102e02d101415335333573466e240080040b80b44048404c88ccd5cd19b8800200102e02d22333573466e240080040b80b488ccd5cd19b8900200102d02e22333573466e200080040b40b8894cd4ccd5cd19b8900200102e02d10011002225335333573466e240080040b80b44008400440ac4cd5ce2491b646561646c696e6520686173206e6f7420706173736564207965740002a102a135001220023333573466e1cd55cea80224000466442466002006004646464646464646464646464646666ae68cdc39aab9d500c480008cccccccccccc88888888888848cccccccccccc00403403002c02802402001c01801401000c008cd408808cd5d0a80619a8110119aba1500b33502202435742a014666aa04ceb94094d5d0a804999aa8133ae502535742a01066a04405e6ae85401cccd540980c1d69aba150063232323333573466e1cd55cea80124000466a0466464646666ae68cdc39aab9d5002480008cd40a4cd40e9d69aba15002303d357426ae8940088c98c80fccd5ce02102081e89aab9e5001137540026ae854008c8c8c8cccd5cd19b8735573aa0049000119a81419a81d3ad35742a004607a6ae84d5d1280111931901f99ab9c04204103d135573ca00226ea8004d5d09aba2500223263203b33573807c07a07226aae7940044dd50009aba1500533502275c6ae854010ccd540980b08004d5d0a801999aa8133ae200135742a004605c6ae84d5d1280111931901b99ab9c03a039035135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d55cf280089baa00135742a008603c6ae84d5d1280211931901499ab9c02c02b0273333573466e1cd55ce9baa0054800080a88c98c80a0cd5ce0158150131bad005102813263202633573892010350543500028135573ca00226ea8004c8004d5408c88448894cd40044d400c88004884ccd401488008c010008ccd54c01c480040140100044888d400888d400c894ccd4ccd402001c01000854cd400c40044098409440984888c8c8c8c94ccd4018854ccd4018854ccd402084c011261300349854ccd401c84c01126130034984034402c54ccd401c84c011261300349854ccd401884c0112613003498403054ccd401484028402c402454ccd4014854ccd401c84c015261300449854ccd401884c01526130044984030402854ccd401884c015261300449854ccd401484c0152613004498402c94ccd4014854ccd401c854ccd401c84ccd402c028008004585858402c54ccd4018854ccd401884ccd40280240080045858584028402494ccd4010854ccd4018854ccd401884ccd4028024008004585858402854ccd4014854ccd401484ccd40240200080045858584024402094ccd400c854ccd4014854ccd401484ccd4024020008004585858402454ccd4010854ccd401084ccd402001c0080045858584020401c94ccd4008854ccd4010854ccd401084ccd402001c008004585858402054ccd400c854ccd400c84ccd401c018008004585858401c401848d40048888888801c488800c4888008488800448848cc00400c00848848cc00400c00848848cc00400c00848c88c008dd6000990009aa80d111999aab9f0012500a233500930043574200460066ae880080688c8c8cccd5cd19b8735573aa004900011991091980080180118071aba150023005357426ae8940088c98c8060cd5ce00d80d00b09aab9e5001137540024646464646666ae68cdc39aab9d5004480008cccc888848cccc00401401000c008c8c8c8cccd5cd19b8735573aa0049000119910919800801801180b9aba1500233500f016357426ae8940088c98c8074cd5ce01000f80d89aab9e5001137540026ae854010ccd54021d728039aba150033232323333573466e1d4005200423212223002004357426aae79400c8cccd5cd19b875002480088c84888c004010dd71aba135573ca00846666ae68cdc3a801a400042444006464c6403e66ae7008808407407006c4d55cea80089baa00135742a00466a016eb8d5d09aba2500223263201933573803803602e26ae8940044d5d1280089aab9e500113754002266aa002eb9d6889119118011bab00132001355017223233335573e0044a010466a00e66442466002006004600c6aae754008c014d55cf280118021aba200301813574200222440042442446600200800624464646666ae68cdc3a800a400046a00e600a6ae84d55cf280191999ab9a3370ea00490011280391931900a19ab9c017016012011135573aa00226ea800448488c00800c44880048c8c8cccd5cd19b875001480188c848888c010014c01cd5d09aab9e500323333573466e1d400920042321222230020053009357426aae7940108cccd5cd19b875003480088c848888c004014c01cd5d09aab9e500523333573466e1d40112000232122223003005375c6ae84d55cf280311931900919ab9c01501401000f00e00d135573aa00226ea80048c8c8cccd5cd19b8735573aa004900011991091980080180118029aba15002375a6ae84d5d1280111931900719ab9c01101000c135573ca00226ea80048c8cccd5cd19b8735573aa002900011bae357426aae7940088c98c8030cd5ce00780700509baa001232323232323333573466e1d4005200c21222222200323333573466e1d4009200a21222222200423333573466e1d400d2008233221222222233001009008375c6ae854014dd69aba135744a00a46666ae68cdc3a8022400c4664424444444660040120106eb8d5d0a8039bae357426ae89401c8cccd5cd19b875005480108cc8848888888cc018024020c030d5d0a8049bae357426ae8940248cccd5cd19b875006480088c848888888c01c020c034d5d09aab9e500b23333573466e1d401d2000232122222223005008300e357426aae7940308c98c8054cd5ce00c00b80980900880800780700689aab9d5004135573ca00626aae7940084d55cf280089baa0012323232323333573466e1d400520022333222122333001005004003375a6ae854010dd69aba15003375a6ae84d5d1280191999ab9a3370ea0049000119091180100198041aba135573ca00c464c6401c66ae7004404003002c4d55cea80189aba25001135573ca00226ea80048c8c8cccd5cd19b875001480088c8488c00400cdd71aba135573ca00646666ae68cdc3a8012400046424460040066eb8d5d09aab9e500423263200b33573801c01a01201026aae7540044dd500089119191999ab9a3370ea00290021280311999ab9a3370ea004900111a80418031aba135573ca00846666ae68cdc3a801a400042444004464c6401866ae7003c0380280240204d55cea80089baa0011212223003004112220012323333573466e1d40052002200623333573466e1d40092000200623263200633573801201000800626aae74dd5000a4c244004244002240029210350543100112323001001223300330020020014891cafa75ddf3370b8ecc5fa6d9f155a8ac6d718a04ae6728a03f4badb1a0001"
    }}}

window.currentScript = null;


const VestingDatum = L.Data.Object({
    beneficiary1: L.Data.String,
    beneficiary2: L.Data.String,
    deadline: L.Data.BigInt,
});

function removeChildren(elt) {
    while (elt.firstChild) {
        elt.removeChild(elt.lastChild);
    }
}

function getVestingAddress() {
    if (window.currentScript && window.currentScript.vestingAddress)
        return window.currentScript.vestingAddress;
}

async function loadCardano() {
    const walletsDiv = document.getElementById('wallets');
    logStatus(`Initializing`);
    for (const [key, value] of Object.entries(window.cardano)) {
        if (value.hasOwnProperty('isEnabled')) {
            console.log(`Found Wallet ${key}`);
            const div = document.createElement('div');
            walletsDiv.appendChild(div);
            if (value.hasOwnProperty('icon') && value.icon) {
                const img = document.createElement('img');
                div.appendChild(img);
                img.setAttribute('src', value.icon);
                img.setAttribute('height', 25);
                img.setAttribute('width', 25);
            }
            div.appendChild(document.createTextNode(value.name));
            div.addEventListener("click", () => setWallet(value));
        }
    }
    const scriptsDiv = document.getElementById('scripts');
    for (const [name, value] of Object.entries(plutusScripts)) {
        const div = document.createElement('div');
        scriptsDiv.appendChild(div);
        div.appendChild(document.createTextNode(name));
        div.addEventListener("click", () =>  { window.currentScript = value; div.classList.toggle('selected'); });
    }
    logStatus(`Select a wallet and script`);
}

async function setWallet(wallet) {
    const api = await wallet.enable();
    console.log(`${wallet.name} enabled`);
    logStatus(`${wallet.name} Wallet Enabled`);
    const lucid = await L.Lucid.new(
        new L.Blockfrost("https://cardano-preview.blockfrost.io/api/v0", "preview7JolCEjrfmPx8l4gVfIAEb50FAIDvtLr"),
        "Preview",
    );
    console.log('lucid active');
    logStatus(`Lucid Active`);
    lucid.selectWallet(api);
    window.lucid = lucid;
    for (const [name, plutusScript] of Object.entries(plutusScripts)) {
        plutusScript.vestingAddress = lucid.utils.validatorToAddress(plutusScript.script);
        logStatus(`Loaded script ${name} @${plutusScript.vestingAddress}`)
    }
}

async function submitCardanoTx(signedTx) {
    const tid = await signedTx.submit();
    console.log("Cardano tx submitted: " + tid);
    addLinkToTable("cardanoTxTable", "https://preview.cardanoscan.io/transaction/" + tid, tid);
}

async function signAndSubmitCardanoTx(tx) {
    try {
        const signedTx = await tx.sign().complete();
        await submitCardanoTx(signedTx);
    } catch (err) {
        alert(`Cardano transaction:\ninfo: ${err.info}\nmessage: ${err.message}`);
        throw (err);
    }
}

async function getCardanoPKH() {
    const addr = await window.lucid.wallet.address();
    const details = await L.getAddressDetails(addr);
    return details.paymentCredential.hash;
}

async function getStatus() {
    const pkh = await getCardanoPKH();
    const utxos = await window.lucid.wallet.getUtxos();
    const lovelace = utxos.reduce((acc, utxo) => acc + utxo.assets.lovelace, 0n);

    const vestings = await vestingUTxOs();

    return {
        cardanoPKH: pkh,
        cardanoBalance: lovelace,
        vestingUTxOs: vestings,
    };
}

function addCell(tr, content) {
    const td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(document.createTextNode(content));
}

function addLinkToTable(tableId, href, text) {
    const txTable = document.getElementById('cardanoTxTable');
    const tr = document.createElement('tr');
    txTable.appendChild(tr);
    const td = document.createElement('td');
    tr.appendChild(td);
    const a = document.createElement('a');
    td.appendChild(a);
    a.setAttribute('href', href);
    a.setAttribute('target', '_blank');
    a.appendChild(document.createTextNode(text));
}

function addCopyCell(row, text) {
    const td = document.createElement("td");
    row.appendChild(td);
    const span = document.createElement("span");
    td.appendChild(span);
    const uid = String(Math.random()).slice(2);
    span.setAttribute("id", uid);
    span.appendChild(document.createTextNode(text));
    const button = document.createElement("button");
    td.appendChild(button);
    button.setAttribute("type", "button");
    button.classList.add("btn");
    button.classList.add("btn-outline-primary");
    button.classList.add("btn-sm");
    button.addEventListener("click", () => onCopy(uid));
}

function logStatus(message) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(message));
    const status = document.getElementById('status');
    status.prepend(div);
}

async function setStatus() {
    if (!window.lucid)
        return;

    const status = await getStatus();

    const cardanoPKH = document.getElementById('cardanoPKH');
    removeChildren(cardanoPKH);
    cardanoPKH.appendChild(document.createTextNode(status.cardanoPKH));

    const cardanoBalance = document.getElementById('cardanoBalance');
    const ada = Number(status.cardanoBalance) / 1000000;
    removeChildren(cardanoBalance);
    cardanoBalance.appendChild(document.createTextNode(ada));

    const vestingUTxOsTable = document.getElementById('vestingUTxOsTable');
    removeChildren(vestingUTxOsTable);
    for (const x of status.vestingUTxOs) {
       if (status.cardanoPKH != x.datum.beneficiary)
            continue;

        const tr = document.createElement('tr');
        vestingUTxOsTable.appendChild(tr);

        addCopyCell(tr, x.utxo.txHash + '#' + x.utxo.outputIndex);
        addCopyCell(tr, x.datum.beneficiary);
        addCell(tr, x.utxo.assets.lovelace);
        addCell(tr, new Date(Number(x.datum.deadline)));
    }
}

async function vestingUTxOs() {
    const vestingAddress = getVestingAddress();
    let utxos = vestingAddress ? await window.lucid.utxosAt(vestingAddress) : [];
    const res = [];
    for (const utxo of utxos) {
        const datum = utxo.datum;
        if (datum) {
            try {
                const d = L.Data.from(datum, VestingDatum);
                res.push({
                    utxo: utxo,
                    datum: d
                });
            } catch (err) {
            }
        }
    }
    return res;
}

async function findUTxO(ref) {
    const chunks = ref.split('#');
    const tid = chunks[0];
    const ix = parseInt(chunks[1]);
    const utxos = await vestingUTxOs();
    for (const utxo of utxos) {
        if (utxo.utxo.txHash == tid && utxo.utxo.outputIndex == ix) {
            return utxo;
        }
    }
    return null;
}

async function onVest() {
    const vestingAddress = getVestingAddress();
    if (!vestingAddress) alert('No Vesting Address!!');
    const beneficiaryText1 = document.getElementById('vestBeneficiaryText1');
    const beneficiary1 = beneficiaryText1.value;
    const beneficiaryText2 = document.getElementById('vestBeneficiaryText2');
    const beneficiary2 = beneficiaryText2.value;
    const amountText = document.getElementById('vestAmountText');
    const amount = BigInt(parseInt(vestAmountText.value));
    const deadlineText = document.getElementById('vestDeadlineText');
    const deadline = BigInt(Date.parse(deadlineText.value));

    const d = {
        beneficiary1: beneficiary1,
        beneficiary2: beneficiary2,
        deadline: deadline,
    };
    const datum = L.Data.to(d, VestingDatum);
    const tx = await window.lucid
        .newTx()
        .payToContract(vestingAddress, { inline: datum }, { lovelace: amount })
        .complete();
    signAndSubmitCardanoTx(tx);

    beneficiaryText.value = "";
    amountText.value = "";
    deadlineText.value = "";
}


async function onClaim() {
    const pkh = await getCardanoPKH();

    const referenceText = document.getElementById('claimReferenceText');
    const reference = referenceText.value;

    const utxo = await findUTxO(reference);
    if (utxo) {
        const tx = await window.lucid
            .newTx()
            .collectFrom([utxo.utxo], L.Data.to(new L.Constr(0, [])))
            .attachSpendingValidator(vestingScript)
            .addSignerKey(pkh)
            .validFrom(Number(utxo.datum.deadline))
            .complete();
        signAndSubmitCardanoTx(tx);
    } else {
        console.log("UTxO not found");
    }

    referenceText.value = "";
}

function onCopy(elt) {
    navigator.clipboard.writeText(document.getElementById(elt).firstChild.textContent);
}

window.L = L;

loadCardano();

$(function () {
    $(".dtp").datetimepicker({
        minuteStep: 1,
        autoclose: true,
        format: 'yyyy-mm-dd hh:ii'
    });
});

setStatus();
setInterval(setStatus, 5000);

document.getElementById("vestButton").addEventListener("click", onVest);
document.getElementById("claimButton").addEventListener("click", onClaim);
document.getElementById('cardanoPKHButton').addEventListener("click", () => onCopy("cardanoPKH"));