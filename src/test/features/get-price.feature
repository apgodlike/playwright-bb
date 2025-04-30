@parallel
Feature: Get Current price of the product

    Scenario Outline: Get Current price of the product from BigBasket
    Given User is on "<website>" homepage
    # When User sets Location as "<location>"
    And User Searches for "<product>"
    And User clicks on search button
    Then User lands on search results page
    And User gets the price of first product

     Examples:
    |website    | location     | product     |
    |BigBasket  | Porur    | Urad Dhal        |
   |BigBasket  | Porur    | Moong Dhal        |
   |BigBasket  | Porur    | Sunflower oil        |
   