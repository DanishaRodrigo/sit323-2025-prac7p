1. Build and Push Docker Image
Replace danishaa with your actual Docker Hub username :
docker build -t danishaa/sit323app:latest .
docker push danishaa/sit323app:latest

2. Start Minikube
minikube start

3. Apply Kubernetes Manifests
kubectl apply -f k8s/

Verify pods:
kubectl get pods

Both app and mongo pods should be in Running status.

4. Forward the App Port
kubectl port-forward deployment/app 3000:3000
