exports.wait = () => {
	return`*「 ESPERE 」 PROCESSAMENTO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 NIVEL 」 ATIVADO*`
}

exports.lvloff = () => {
	return`*「 NIVEL 」 DESATIVADO*`
}

exports.lvlnul = () => {
	return`*NIVEL 1 AINDA KSKSKSK*`
}

exports.lvlnoon = () => {
	return`*PEÇA PRO ADMER ATIVAR O NIVEL*`
}

exports.noregis = () => {
	return`*「 VOCÊ AINDA NÃO ESTÁ REGISTRADO 」*\n\n*como registrar ${prefix}daftar nome|idade*\n*exemplo ${prefix}daftar seth|6*`
}

exports.rediregis = () => {
	return`*「 JÁ ​​REGISTRADO 」*\n\n*Você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*sim, falhou tente repetir*`
}

exports.linkga = () => {
	return`*desculpe link inválido*`
}

exports.groupo = () => {
	return`*「 SÓ EM GRUPO 」*`
}

exports.ownerb = () => {
	return`*「 ESTE COMANDO SÓ PODE SER USADO PELO PROPRIETÁRIO DO BOT 」*`
}

exports.ownerg = () => {
	return`*「 ESTE COMANDO SÓ PODE SER USARO PELO PROPRIETÁRIO DO GRUPO 」*`
}

exports.admin = () => {
	return`*「 SIFUDEKKKKK MEMBRO COMUM QUERENDO USAR COMANDO DE ADMER 」*`
}

exports.badmin = () => {
	return`*「 ME DA ADM QUE EU ACEITO O COMANDO 👉👈 」*`
}

exports.nsfwoff = () => {
	return`*NSFW ESTÁ DESATIVADO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto/texto em branco*`
}

exports.clears = () => {
	return`*limpado tudo com sucesso*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*\n\npara saber se você se registrou, verifique a mensagem que enviei \n\nNOTA:\n*se você não recebeu uma mensagem.  significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS 」*\n\nvocê já está registrado com os dados\n\n┏━⊱nome \n┗⊱ ${namaUser}\n┏━⊱número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱ idade \ n┗⊱ ${umurUser}\n┏━⊱ tempo de registro\n┗⊱ ${time}\n\n┏━❉ *N * ❉━\n┣⊱ ${serialUser}\n┗⊱NOTA: não se esqueça deste número porque é importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} você não é dono😝*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱ seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisito de nível : ${aha}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando de comando : ${command}*\n* ┣nível condicional : ${ahb}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe, ${pushname} seu nível não é suficiente*\n\n*┏⊱level : ${getLevelingLevel(sender)}*\n* ┣⊱tipo de comando : ${command}*\n* ┣nível de nível: ${ahc}*\n\n_NOTA: CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.antilinker = (pushname) => {
	return`*Desculpa ${pushname}*\n*Você foi expulso do grupo por enviar outro link de grupo*`
}

exports.detectorOnAlready = () => {
	return`*ANTES DE SEU ANTILINK SER ATIVADO*`
}

exports.antilinkOn = (groupName) => {
	return`*「 ANTILINK 」*\n\n*atenção do grupo ${groupName} ativou o recurso antilink*\n*se você enviar um link de grupo, você será banido automaticamente*`
}

exports.antilinkOf = () => {
	return`*「 ANTILINK 」NÃO ATIVO*`
}
