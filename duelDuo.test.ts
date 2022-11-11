
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true);
})

test('Clicking the draw button brings up the choices', async () => {
    const draw = await driver.findElement(By.id('choices')).click();
    expect(draw).toBe(true);
})
test('Clicking the add to duo button displays the bot chosen', async () => {
    const add = await driver.findElement(By.id('player-duo')).click();
    expect(add).toBe(true);
})