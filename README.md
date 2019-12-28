# dapr-upload

A sample to upload data via Dapr sidecar

## Start the applicaiton

```
$ kubectl apply -f ./node.yaml
```

Open port for Dapr sidecar service

```
kubectl patch svc nodeapp-dapr -p '{"spec": {"type": "LoadBalancer"}}'
```

## Test the application

Running well without Dapr

```
$ curl -X POST -F 'dataField=A data field' -F 'file=@./index.js' http://localhost:3000/upload
```

Error if running with Dapr

```
$ curl -X POST -F 'dataField=A data field' -F 'file=@./index.js' http://localhost/v1.0/invoke/nodeapp/method/upload
```
