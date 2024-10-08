function solution(bandage, health, attacks) {
    const maxHealth = health
    const [bandageTime, curePerSecond, bonusCure] = bandage
    let lastAttackPoint = 0
    let currentHealth = health
    for (const attack of attacks){
        const [attackPoint, attackAmount] = attack
        if (currentHealth < maxHealth){
            const cureTime = attackPoint - lastAttackPoint -1
            const basicCurePoint = cureTime*curePerSecond
            const bonusCurePoint = Math.floor(cureTime/bandageTime)*bonusCure
            currentHealth = Math.min(currentHealth+basicCurePoint+bonusCurePoint, maxHealth)
        }
        currentHealth -= attackAmount
        lastAttackPoint = attackPoint
        if (currentHealth <= 0) break
    }
    
    return currentHealth <= 0 ? -1 : currentHealth;
}