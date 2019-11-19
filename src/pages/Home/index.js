import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/camisa-flamengo-i-1920-sn-torcedor-c-patrocinio-adidas-masculina/68/COL-7378-068/COL-7378-068_zoom1.jpg"
          alt="Camisa"
        />
        <strong>Camisa do Mengão</strong>
        <span>R$249,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/camisa-flamengo-i-1920-sn-torcedor-c-patrocinio-adidas-masculina/68/COL-7378-068/COL-7378-068_detalhe2.jpg?ims=326x"
          alt="Camisa"
        />
        <strong>Camisa do Mengão</strong>
        <span>R$249,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/camisa-flamengo-i-1920-sn-torcedor-c-patrocinio-adidas-masculina/68/COL-7378-068/COL-7378-068_zoom1.jpg"
          alt="Camisa"
        />
        <strong>Camisa do Mengão</strong>
        <span>R$249,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/camisa-flamengo-i-1920-sn-torcedor-c-patrocinio-adidas-masculina/68/COL-7378-068/COL-7378-068_detalhe2.jpg?ims=326x"
          alt="Camisa"
        />
        <strong>Camisa do Mengão</strong>
        <span>R$249,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/camisa-flamengo-i-1920-sn-torcedor-c-patrocinio-adidas-masculina/68/COL-7378-068/COL-7378-068_zoom1.jpg"
          alt="Camisa"
        />
        <strong>Camisa do Mengão</strong>
        <span>R$249,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/camisa-flamengo-i-1920-sn-torcedor-c-patrocinio-adidas-masculina/68/COL-7378-068/COL-7378-068_detalhe2.jpg?ims=326x"
          alt="Camisa"
        />
        <strong>Camisa do Mengão</strong>
        <span>R$249,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
