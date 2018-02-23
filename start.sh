# /usr/bin/bash
# ${RED}S${LBLUE}T${GREEN}A${CYAN}T${YELLOW}I${PURPLE}C ${RED}D${WHITE}E${ORANGE}V${NC}

if [[ ${NODE_ENV} == \"development\" ]]; then
    if [[ ${OUTPUT} == \"static\" ]]; then
        echo \"${RED}ENVIRONMENT${WHITE}: ${LBLUE}DEVELOPMENT${NC} \n ${ORANGE}OUTPUT${WHITE}: ${LBLUE}STATIC${NC}\" && npm run dev:static;
    elif [[ ${OUTPUT} == \"standard\" ]]; then
        echo \"${RED}ENVIRONMENT${WHITE}: ${LBLUE}DEVELOPMENT${NC} \n ${ORANGE}OUTPUT${WHITE}: ${LBLUE}STANDARD${NC}\" && npm run dev:standard;
    else
        echo 'Invalid OUTPUT value. Must be static or standard.'; 
    fi; 
elif [[ ${NODE_ENV} == \"production\" ]]; then
    if [[ ${OUTPUT} == \"static\" ]]; then
        echo \"${RED}ENVIRONMENT${WHITE}: ${LBLUE}PRODUCTION${NC} \n ${ORANGE}OUTPUT${WHITE}: ${LBLUE}STATIC${NC}\" && npm run build:static;
    elif [[ ${OUTPUT} == \"standard\" ]]; then
        echo \"${RED}ENVIRONMENT${WHITE}: ${LBLUE}PRODUCTION${NC} \n ${ORANGE}OUTPUT${WHITE}: ${LBLUE}STANDARD${NC}\" && npm run build:standard;
    else
        echo 'Invalid OUTPUT value. Must be static or standard.';
    fi;
else
    echo 'Invalid NODE_ENV value. Must be development or production.';
fi