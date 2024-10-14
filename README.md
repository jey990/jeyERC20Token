# jeyERC20Token
jey ERC20 Token contract

This repository contains the implementation of a basic ERC20 token on the Ethereum blockchain, following the ERC20 standard. The token includes features such as minting, burning, transferring, and approving allowances.

## Overview

### Smart Contract Details:
- **Token Name**: JeyERC20Token
- **Token Symbol**: JEY
- **Solidity Version**: 0.8.24
- **Standard**: ERC20

This contract provides the following functionalities:
1. **Mint**: The ability to create new tokens and assign them to a specific address.
2. **Burn**: The ability to destroy tokens, reducing the total supply.
3. **Transfer**: The ability to send tokens from one address to another.
4. **Approve**: Authorize another address to spend tokens on behalf of the owner.
5. **TransferFrom**: Transfer tokens from one address to another using an allowance set by the `approve` function.

## Features

- **Minting**: Tokens can be minted by calling the `mint()` function, which increases the total supply.
- **Burning**: Tokens can be burned by calling the `burn()` function, which decreases the total supply.
- **Transferring**: Users can transfer tokens between addresses using the `transfer()` function.
- **Allowance**: The `approve()` and `transferFrom()` functions allow a spender to transfer tokens on behalf of the token owner.

## Contract Functions

- **constructor(uint256 initialSupply)**: Initializes the token by minting an initial supply to the deployer's address.
- **mint(address to, uint256 amount)**: Allows the creation of new tokens and assigns them to the specified address.
- **burn(address from, uint256 amount)**: Allows the destruction of tokens from the specified address.
- **transfer(address to, uint256 amount)**: Transfers tokens from the caller’s address to another address.
- **approve(address spender, uint256 amount)**: Approves a spender to transfer tokens on behalf of the caller.
- **transferFrom(address from, address to, uint256 amount)**: Transfers tokens from one address to another based on the allowance set by `approve()`.
- **getBalanceOf(address account)**: Returns the token balance of a specified address.

## How to Deploy

1. Clone this repository:
   ```bash
   git clone https://github.com/jey990/MyERC20Token.git
   cd MyERC20Token
