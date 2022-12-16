
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test ('Check that clicking the draw button displays div with id= choices', async () =>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    const divider = await driver.findElement(By.id('choices'))
    const displayed = await divider.isDisplayed()
    expect(displayed).toBe(true)
})

test ('check that clicking add to duo displays div with id= player-duo', async () =>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(1000)
    const divider = await driver.findElement(By.id('player-duo'))
    const displayed = await divider.isDisplayed()
    expect(displayed).toBe(true)
})