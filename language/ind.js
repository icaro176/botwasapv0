exports.wait = () => {
	return`*「 ESPERE 」 PROCESSAMENTO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVAR 」 NIVELAMENTO*`
}

exports.lvloff = () => {
	return`*「 DESATIVAR 」 NIVELAMENTO*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUB NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 AINDA NÃO ESTÁ REGISTADO 」*\n\n*como registrar ${prefix}daftar nome|idade*\n*exemplo ${prefix}daftar seth|6*`
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
	return`*「SÓ GRUPO」*`
}

exports.ownerb = () => {
	return`*「 PROPRIETÁRIO DO BOT APENAS 」*`
}

exports.ownerg = () => {
	return`*「 SOMENTE PROPRIETÁRIOS DO GRUPO 」*`
}

exports.admin = () => {
	return`*「 SOMENTE GRUPO DE ADMINISTRAÇÃO 」*`
}

exports.badmin = () => {
	return`*「 O BOT DEVE SER ADMINISTRADOR 」*`
}

exports.nsfwoff = () => {
	return`*NSFW FOI ATIVO*`
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
	return`*「 REGISTRO 」 *\n\npara saber se você se registrou, verifique a mensagem que enviei \n\nNOTA:\n*se você não recebeu uma mensagem.  significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DO PAÍS 」*\n\nvocê já está registrado com os dados\n\n┏━⊱nome \n┗⊱ ${namaUser}\n┏━⊱número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱ idade \ n┗⊱ ${umurUser}\n┏━⊱ tempo de registro\n┗⊱ ${time}\n\n┏━❉ *N * ❉━\n┣⊱ ${serialUser}\n┗⊱NOTA: não se esqueça deste número porque é importante: v`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} você não é dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} o nível de não é suficiente*\n\n*┏⊱ seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisito de nível : ${aha}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣tipo de comando de comando : ${command}*\n* nível condicional : ${ahb}*\n\n_NOTA : CHAT/SEMPRE LIGADO PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.antilinker = (pushname) => {
	return`*Maaf ${pushname}*\n*anda di kick dari group karena telah mengirim link group lain*`
}

exports.detectorOnAlready = () => {
	return`*SEBELUM NYA ANTILINK SUDAH AKTIF*`
}

exports.antilinkOn = (groupName) => {
	return`*「 ANTILINK 」*\n\n*perhatian group ${groupName} telah mengaktifkan fitur antilink*\n*jika kalian mengirimkan link group maka akan di kick otomatis*`
}

exports.antilinkOf = () => {
	return`*「 ANTILINK 」NON AKTIF*`
}
