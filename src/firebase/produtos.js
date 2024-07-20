import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./config";

export const produtosCol = collection(db, "produtos");
export async function addProduto(data) {
  await addDoc(produtosCol, data);
}

export async function getProdutos() {
  const snapshot = await getDocs(produtosCol);
  const produtos = [];

  snapshot.forEach((doc) => {
    produtos.push({ ...doc.data(), id: doc.id });
  });

  return produtos;
}

export async function getProdutosUsuario(idUsuario) {
  const filtro = query(produtosCol, where("idUsuario", "==", idUsuario));

  const snapshot = await getDocs(filtro);
  const produtos = [];

  snapshot.forEach((doc) => {
    produtos.push({ ...doc.data(), id: doc.id });
  });

  return produtos;
}

export async function deleteProduto(id) {
  const produtoDoc = doc(produtosCol, id);

  await deleteDoc(produtoDoc);
}

export async function getProduto(id) {
  const produtoDoc = doc(produtosCol, id);

  const snapshot = await getDoc(produtoDoc);

  return snapshot.data();
}

export async function updateProduto(id, data) {
  const produtoDoc = doc(produtosCol, id);
  await updateDoc(produtoDoc, data);
}
